module.exports = (name, message) => {
    const htmlEmail = `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <style>
        table,
        td,
        div,
        h1,
        p {
          font-family: Arial, sans-serif;
        }
    
        @media screen and (max-width: 530px) {
          .unsub {
            display: block;
            padding: 8px;
            margin-top: 14px;
            border-radius: 6px;
            background-color: #555555;
            text-decoration: none !important;
            font-weight: bold;
          }
    
          .col-lge {
            max-width: 100% !important;
          }
        }
    
        @media screen and (min-width: 531px) {
          .col-sml {
            max-width: 27% !important;
          }
    
          .col-lge {
            max-width: 73% !important;
          }
        }
      </style>
    </head>
    
    <body style="margin:0;padding:0;word-spacing:normal;background-color:#939297;">
      <div role="article" aria-roledescription="email" lang="en"
        style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#939297;">
        <table role="presentation" style="width:100%;border:none;border-spacing:0;">
          <tr>
            <td align="center" style="padding:0;">
              <table role="presentation"
                style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
                <tr>
                  <td style="padding:30px;background-color:#ffffff;">
                    <h1
                      style="margin-top:0;margin-bottom:16px;font-size:26px;line-height:32px;font-weight:bold;letter-spacing:-0.02em;">
                      Te damos la bienvenida "${name}"</h1>
                    <p style="margin:0;">Tus datos han sido enviados con éxito a
                      <a href="https://serviciotecnicoriver.herokuapp.com/" style="color:#005b94;text-decoration:underline;"
                        target="_blank">SOPORTE TECNICO RIVER</a>
                      nos estaremos comunicando contigo en el rango de 1 a 2 horas. Muchas gracias!
                      , si gustas revisar nuestro facebook. <a href="https://www.facebook.com/StecRiver"
                        style="color:#005b94;text-decoration:underline;" target="_blank">Aquí</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;font-size:24px;line-height:28px;font-weight:bold;">
                    <a href="https://serviciotecnicoriver.herokuapp.com/" target="_blank" style="text-decoration:none;">
                      <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1615913967/soporte%20tecnico%20river%20/arduino.jpg" width="600" alt=""
                        style="width:100%;height:auto;display:block;border:none;text-decoration:none;color:#363636;"></a>
                  </td>
                </tr>
                <tr>
                  <td
                    style="padding:35px 30px 11px 30px;font-size:0;background-color:#ffffff;border-bottom:1px solid #f0f0f5;border-color:rgba(201,201,207,.35);">
    
                    <div class="col-sml"
                      style="display:inline-block;width:100%;max-width:145px;vertical-align:top;text-align:left;font-family:Arial,sans-serif;font-size:14px;color:#363636;">
                      <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1615914032/soporte%20tecnico%20river%20/logo-primary.png" width="115" alt=""
                        style="width:80%;max-width:115px;margin-bottom:20px;">
                    </div>
    
                    <div class="col-lge"
                      style="display:inline-block;width:100%;max-width:395px;vertical-align:top;padding-bottom:20px;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
                      <p style="margin-top:0;margin-bottom:12px;">
                        Tu consulta fue el siguiente: <br> 
                        ${message}
                      </p>
                      <p style="margin:0;">
                        <a href="https://api.whatsapp.com/send?phone=51920484285&text=Hola,%20necesito%20informacion%20a%20una%20consulta,%20gracias."
                          style="background: #005b94; text-decoration: none; padding: 10px 25px; color: #ffffff; border-radius: 4px; display:inline-block; mso-padding-alt:0;text-underline-color:#005b94"
                          target="_blank">
                          <span style="mso-text-raise:10pt;font-weight:bold;">Escríbenos por Whatsapp</span>
    
                        </a>
                      </p>
                    </div>
    
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px;text-align:center;font-size:12px;background-color:#404040;color:#cccccc;">
                    <p style="margin:0 0 8px 0;">
                      <a href="https://www.facebook.com/StecRiver" style="text-decoration:none;">
                          <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1615913967/soporte%20tecnico%20river%20/icon-facebook.png" width="40" height="40" alt="f" style="display:inline-block;color:#cccccc;">
                      </a>
                      <a href="https://twitter.com/StecRiver" style="text-decoration:none;">
                            <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1615913967/soporte%20tecnico%20river%20/icon-twitter.png"
                          width="40" height="40" alt="t" style="display:inline-block;color:#cccccc;"></a>
                    </p>
                    <p style="margin:0;font-size:14px;line-height:20px;">&reg; Desarrollado por <a class="unsub"
                        href="https://www.instagram.com/paulurbina94/" style="color:#cccccc;text-decoration:underline;">Paul
                        Urbina</a></p>
                  </td>
                </tr>
              </table>
    
            </td>
          </tr>
        </table>
      </div>
    </body>
    
    </html>
    `
    return htmlEmail
}