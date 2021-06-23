const express = require('express');
const router = express.Router();
// const { sendEmailAUser } = require('../config/helpers');

// Required models
const User = require('../models/User');
const Subscriber = require('../models/Suscribe');

// Sanitization
const { body, check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/new-user',

  // Sanitization
  body('email').isEmail(),
  body('name').trim().escape().stripLow(),
  body('subject').trim().escape().stripLow(),
  body('message').trim().escape().stripLow(),

  async (req, res) => {
    // Check Validity
    check('name').isLength({ min: 4 }).withMessage('Ingrese un nombre válido mayor a 4 carácteres')
    check('email').isEmail().withMessage('Ingrese un correo válido')
    check('subject').isLength({ min: 4 }).withMessage('Ingrese un sujeto válido mayor a 4 carácteres')
    check('message').isLength({ min: 4 }).withMessage('Ingrese un mensaje válido mayor a 4 carácteres')

    const result = validationResult(req);
    const hasErrors = !result.isEmpty();

    if (hasErrors) { // Si hay errores
      return res.json({
        success: false,
        text: 'Ingrese los datos correctamente',
        data: result,
      })
    }

    // send email a user register
    // await sendEmailAUser(req.body);

    // save data a new user
    const user = new User(req.body);
    await user.save(); // Saved date client!
    res.json({
      success: true,
      text: 'Ya esta registrado, gracias. Revisar tu correo.',
      data: {}
    })
  }
);

router.post('/subscriber',
  body('subscriber').isEmail(),
  async (req, res) => {
    // Express validator
    check('subscriber').isEmail().withMessage('Ingrese un correo válido')

    const result = validationResult(req);
    const hasErrors = !result.isEmpty();

    if (hasErrors) { // Si hay errores
      return res.json({
        success: false,
        text: 'Ingrese el dato correctamente',
        data: result,
      })
    }

    // await sendDate(email);
    const suscriber = new Subscriber(req.body);
    await suscriber.save();
    res.json({
      success: true,
      text: 'Ya esta registrado, gracias!',
      data: {}
    })
  });

module.exports = router;