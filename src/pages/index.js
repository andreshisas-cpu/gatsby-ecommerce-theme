// src/pages/index.js
import * as React from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import Title from '../components/Title';

import * as styles from './index.module.css';
import { navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

// 1) Cambia por tu número en formato internacional sin "+"
const WHATSAPP = '593961954607';

const IndexPage = () => {
  const goToShop = () => navigate('/shop');

  // 2) CTA directa a WhatsApp con mensaje inicial
  const goToWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hola, quiero pedir pan de masa madre'
    );
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
    }
  };

  return (
    <Layout disablePaddingBottom>
      {/* HERO: portada en español */}
      <Hero
        maxWidth={'560px'}
        image={'/pan.png'} // Sube tu imagen a /static/banner1.png
        title={'Pan de masa madre artesanal'}
        subtitle={'Solicita por encargo en Tena-Napo. Ingredientes simples, fermentación larga y corteza crujiente.'}
        ctaText={'Pedir por WhatsApp'}
        ctaAction={goToWhatsApp}
      />

      {/* Mensaje corto */}
      <div className={styles.messageContainer}>
        <p>
          Fermentación lenta, harina de calidad y masa madre 100%. Pan fresco del día.
        </p>
        <p className={styles.gold}>
          Encargos hasta las 22:00 para hornear al día siguiente.
        </p>
      </div>

      {/* Colecciones / categorías (mantiene el grid del tema) */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Nuestros panes'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* Cómo comprar (segundo bloque con botón) */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={toOptimizedImage('/highlight.png')} // /static/highlight.png
            altImage={'Cómo comprar'}
            miniImage={toOptimizedImage('/highlightmin.png')}
            miniImageAlt={'Detalle'}
            title={'Cómo comprar'}
            description={
              'Elige tus panes, confirma por WhatsApp y recibe en franja horaria. Retiro en punto o envío local.'
            }
            textLink={'Confirmar por WhatsApp'}
            link={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              'Hola, quiero hacer un pedido de pan de masa madre.'
            )}`}
          />
        </Container>
      </div>

      {/* Promo simple para la tienda interna (opcional) */}
      <div className={styles.promotionContainer}>
        <Hero
          image={toOptimizedImage('/banner2.png')}
          title={'Ver catálogo completo'}
          subtitle={'Si prefieres navegar el catálogo del sitio, entra a la tienda.'}
          ctaText={'Ver productos'}
          ctaAction={goToShop}
          maxWidth={'520px'}
        />
      </div>

      {/* Botón flotante de WhatsApp (siempre visible) */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
          'Hola, quiero pedir pan de masa madre.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          right: 16,
          bottom: 16,
          background: '#25D366',
          color: '#fff',
          padding: '12px 16px',
          borderRadius: 999,
          fontWeight: 700,
          zIndex: 999,
          textDecoration: 'none'
        }}
      >
        WhatsApp
      </a>
    </Layout>
  );
};

export default IndexPage;
