import React from 'react';
import useStyles from './styles';


const Contact = () => {
  const classes = useStyles();

  return (
    <section className={classes.Contact}>
      <div className={classes.container}>
        <h2 className={classes.headerContact}>Entre em contato!</h2>
        <div className={classes.ContactBody}>
          <div className={classes.cardContact}>
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu e-mail" />
            <textarea placeholder="Sua Mensagem" ></textarea>
            <a href="/">Enviar</a>
          </div>
          <div className={classes.info}>
            <div>
              <h4>Endereço</h4>
              <p>Rua Tal 2225</p>
              <p>São Pedro do Sul - RS</p>
              <p>Brasil</p>
            </div>
            <div>
              <h4>Telefone</h4>
              <p>55 99999 9999</p>
            </div>
            <div>
              <h4>E-mail</h4>
              <p>contato@nutri.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;