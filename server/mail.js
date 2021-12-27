const axios = require('axios').default
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

const validateHuman = async (token, res) => {
  try {
    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    )
    return data.success
  } catch (err) {
    return res.status(500).send({
      kind: 'error',
      text: 'ごめん。人間とロボットを区別するプログラムが失敗。',
    })
  }
}

exports.sendMessage = async (req, res) => {
  const isHuman = await validateHuman(req.body.token, res)

  if (!isHuman) {
    return res.status(400).send({
      kind: 'error',
      text: 'Bot is not allowed to submit form.',
    })
  }

  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.status(400).send({
      kind: 'error',
      text: '名前、メアド、メッセージは必須ですよ。',
    })
  }

  const sender = {
    name: req.body.name,
    email: req.body.email,
    msg: req.body.message,
  }

  const mailOptions = {
    from: `Daisho <noreply@${process.env}>`,
    to: process.env.MAIL_DESTINATION,
    subject: `Message from ${sender.name} via portfolio`,
    text: `Name: ${sender.name}. Content: ${sender.msg} Email: ${sender.email}`,
    html: `<p>Name: ${sender.name}</p><br><p>Message: ${sender.msg}</p><br><p>Email: ${sender.email}</p>`,
  }

  return transport.sendMail(mailOptions, err => {
    if (err) {
      res.status(500).send({
        kind: 'error',
        text: '管理人がとちりました。送信失敗です。',
      })
    } else {
      res.status(200).send({
        kind: 'success',
        text: `送信成功ですよ！${sender.name}さん。`,
      })
    }
  })
}
