import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Camera, Gift, Clock, Users, ChevronDown, Copy, Upload } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { 
  HeartVector, 
  FlowerVector, 
  RingsVector, 
  LeafVector, 
  CalendarVector, 
  CameraVector, 
  DressVector, 
  GiftVector, 
  ShareVector, 
  RSVPVector, 
  ThankYouVector,
  ClockVector,
  Frame1,
  Frame2,
  Frame3
} from './components/SectionVectors';

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 bg-[var(--color-secondary)] text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInOut z-50">
      {message}
    </div>
  );
}

function WelcomePage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="min-h-screen bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)]">
      <div className="text-center p-8">
        <h1 className="text-2xl quintessential-regular mb-8">22 NOVIEMBRE 2025</h1>
        <h2 className="text-8xl great-vibes-regular mb-1">Thania</h2>
        <h2 className="text-6xl parisienne-regular mb-3">&</h2>
        <h2 className="text-8xl great-vibes-regular mb-8">Sebastian</h2>
        <h3 className="text-2xl quintessential-regular mb-8">¡NOS CASAMOS!</h3>
        <button
          onClick={onEnter}
          className="border border-[var(--color-secondary)] px-8 py-3 text-xl hover:bg-[var(--color-secondary)] hover:text-[var(--color-light)] transition-all quintessential-regular"
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-11-22T15:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 md:flex md:justify-center md:items-center md:gap-8 text-center">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <React.Fragment key={unit}>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-light quintessential-regular text-[var(--color-text)]">
              {value}
            </div>
            <div className="text-xs md:text-sm uppercase quintessential-regular tracking-wider text-[var(--color-secondary)]">
              {unit}
            </div>
          </div>
          {index < Object.entries(timeLeft).length - 1 && (
            <span className="hidden md:inline-block text-3xl text-[var(--color-secondary)] self-center">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const photos = [
    "https://lh3.googleusercontent.com/pw/AP1GczNpqaw54dEN8yWq03Ydds9P_IdDauHXLOchRGL_gfZqqUWKUiOxlbHCBEeH9PVTbnAmd4F26lXlnhT94QcALTsIIRnoxQbQACWimgpDOnelKC3jEtH-GoZEvyiKEOlxLsxKrCdRx-DZdu_mEOyt2ts=w590-h885-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPoHdERaILks6qznJkfyS5dethSEIQKKtr9vJ-eckkUIf8FuwLD6gXrJyvnhwI193w4n0ttkRkKgGc4Jymioc_4gMhlvbf-hllSGxeeq_syO06EX5vsqW4ltu94eiqh8LsFL8GTr0HydOGNWIR_BhA=w590-h885-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOGgpNeg9KuIQyd_LzqFsS8z9H_BK7gMnNt5Q7EiUw8LjVItgizyUAPnA6WWflbiPxPwPA0TSjqYNiLl1ONxdv0Dcfd-dMPxVjvVcCoZO8flGw2FFP2C9635sKbYr_H2zNVG-I-2OlVFoIkBgQhhfs=w1328-h885-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPUdfTFqrphfQuTzJ-BhVMppdwFzvTUwRQG6WLTt7kgwEmmK0L1jXX3D-HTss9TtWiy-j64kVjyuAfH__p64S6L4W5mQw8Z2xbIq1tvv81z8LNQfd1AAjHqpb8I5zeL05hJEcBGiAYNT0Mfa_8mNio=w590-h885-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNgIjBRB-kFE0yQdrxvANp3mPJkxmwWVk2oqYPRtQ9HrXbXrYENaZL8TV4CNGI7GNzx0G0XXs5GGMjRiAw7kj7kdajvxMOp03ZALs_h5iAViZGzY1OGPEgf6G3HE-iz8k8O2EGt_DxRwIxyeCwBWsQ=w590-h885-s-no-gm?authuser=0"
  ];

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index} className="px-2">
          <img src={photo} alt="Couple" className="w-full h-[300px] object-cover rounded-lg" />
        </div>
      ))}
    </Slider>
  );
}

function MainContent() {
  const [showRsvpForm, setShowRsvpForm] = useState(false);
  const [rsvpData, setRsvpData] = useState({
    attendance: '',
    name: '',
    notes: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleAddToCalendar = () => {
    const event = {
      text: 'Boda Thania & Sebastian',
      dates: '20251122T150000',
      location: 'Arecas'
    };
    
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${event.text}&dates=${event.dates}/${event.dates}&location=${event.location}`,
      '_blank'
    );
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/4en1cqD7gwcWv85h6', '_blank');
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setShowRsvpForm(false);
  };

  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-text)]">
      {/* Banner Section */}
      <section className="relative section-with-frame">
        <Frame1 />
        <HeartVector />
        <div className="section-content">
          <h1 className="title-special text-7xl mb-4">
            <span>T</span>
            <span className="ampersand">&</span>
            <span>S</span>
          </h1>
          <p className="text-xl italic quintessential-regular">"¡Nos llena de alegría compartir nuestro amor con ustedes! Los invitamos a celebrar juntos el día más especial de nuestras vidas."</p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="relative section-with-frame">
        <Frame2 />
        <ClockVector />
        <div className="section-content">
          <h2 className="text-6xl great-vibes-regular mb-8">Save the date</h2>
          <CountdownTimer />
        </div>
      </section>

      {/* Celebration Details */}
      <section className="relative section-with-frame">
        <Frame3 />
        <CalendarVector />
        <div className="section-content">
          <h2 className="text-6xl great-vibes-regular mb-8">Celebración</h2>
          <div className="mb-8">
            <p className="text-2xl mb-2 quintessential-regular">Sábado 22 de Noviembre</p>
            <p className="text-xl mb-2 quintessential-regular">15:00 pm</p>
            <button
              onClick={handleAddToCalendar}
              className="border border-[var(--color-secondary)] px-6 py-2 flex items-center justify-center mx-auto gap-2 transition-all quintessential-regular hover:bg-[var(--color-secondary)] hover:text-[var(--color-light)]"
            >
              <Calendar size={20} />
              Guardar Fecha
            </button>
          </div>
          <div>
            <p className="text-2xl mb-2 quintessential-regular">Jardín Arecas</p>
            <p className="text-xl mb-2 quintessential-regular">Cuernavaca, Morelos</p>
            <button
              onClick={handleMapClick}
              className="border border-[var(--color-secondary)] px-6 py-2 flex items-center justify-center mx-auto gap-2 transition-all quintessential-regular hover:bg-[var(--color-secondary)] hover:text-[var(--color-light)]"
            >
              <MapPin size={20} />
              ¿Cómo llegar?
            </button>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="relative section-with-frame">
        <Frame1 />
        <CameraVector />
        <div className="section-content">
          <h2 className="text-6xl great-vibes-regular mb-4">Retratos de Nuestro Amor</h2>
          <p className="text-xl mb-8 quintessential-regular">Un minuto, un segundo, un instante que queda en la eternidad</p>
          <div className="max-w-4xl mx-auto">
            <PhotoCarousel />
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="relative section-with-frame">
        <Frame2 />
        <DressVector />
        <div className="section-content">
          <h2 className="text-6xl great-vibes-regular mb-4">Dress Code</h2>
          <p className="text-xl mb-8 quintessential-regular">Una orientación para tu vestuario</p>
          <button 
            onClick={() => window.open('https://mx.pinterest.com/thanischic/dress-code-amigas/?invite_code=38d0a289febe4f13a9514db7ef960bc1&sender=720716884026266554', '_blank')}
            className="border border-[var(--color-secondary)] px-6 py-2 transition-all quintessential-regular hover:bg-[var(--color-secondary)] hover:text-[var(--color-light)]"
          >
            Ver más
          </button>
        </div>
      </section>

      {/* Gifts Section */}
      <section className="relative section-with-frame">
        <Frame3 />
        <GiftVector />
        <div className="section-content">
          <h2 className="text-6xl great-vibes-regular mb-4">Regalos</h2>
          <p className="text-xl mb-8 quintessential-regular">Lo más importante es tu presencia, pero si deseas obsequiarnos un regalo, puedes hacerlo de las siguientes formas:</p>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <span className="text-lg quintessential-regular">CLABE: 123456789012345678</span>
              <button className="p-2 transition-all hover:text-[var(--color-secondary)]">
                <Copy size={20} />
              </button>
            </div>
            <button className="border border-[var(--color-secondary)] px-6 py-2 transition-all quintessential-regular hover:bg-[var(--color-secondary)] hover:text-[var(--color-light)]">
              Experiencias
            </button>
          </div>
        </div>
      </section>

      {/* Photo Sharing Section */}
      <section className="relative section-with-frame">
        <Frame1 />
        <ShareVector />
        <div className="section-content">
          <h2 className="text-6xl great-vibes-regular mb-4">Compartimos este día junto a ti</h2>
          <p className="text-xl mb-8 quintessential-regular">Comparte tus fotos y videos de este hermoso día</p>
          <button
            onClick={() => window.open('https://photos.app.goo.gl/4wCU5kSE2Pn5MMP48', '_blank')}
            className="border border-[var(--color-secondary)] px-6 py-2 flex items-center justify-center mx-auto gap-2 transition-all quintessential-regular hover:bg-[var(--color-secondary)] hover:text-[var(--color-light)]"
          >
            <Upload size={20} />
            Subir fotos
          </button>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="relative section-with-frame">
        <Frame2 />
        <RSVPVector />
        <div className="section-content">
          <h2 className="text-6xl great-vibes-regular mb-4">R.S.V.P</h2>
          <p className="text-xl mb-8 quintessential-regular">Evento sólo para adultos, no niños</p>
          
          <form 
            action="https://formspree.io/f/mgvkbego" 
            method="POST"
            className="max-w-md mx-auto space-y-6"
          >
            <input type="hidden" name="_subject" value="Nueva confirmación de asistencia" />
            
            <div>
              <h3 className="text-2xl mb-4 quintessential-regular">¿Asistes a la celebración?</h3>
              <div className="space-y-3">
                <label className="block quintessential-regular">
                  <input
                    type="radio"
                    name="attendance"
                    value="Sí, confirmo"
                    className="mr-2"
                    required
                  />
                  Sí, confirmo
                </label>
                <label className="block quintessential-regular">
                  <input
                    type="radio"
                    name="attendance"
                    value="No puedo asistir"
                    className="mr-2"
                    required
                  />
                  No puedo
                </label>
              </div>
            </div>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                className="w-full p-2 border border-[var(--color-secondary)] rounded text-[var(--color-text)] placeholder-[var(--color-accent)] quintessential-regular"
                required
              />
            </div>

            <div>
              <textarea
                name="notes"
                placeholder="Datos importantes (ej: Soy vegetariano)"
                className="w-full p-2 border border-[var(--color-secondary)] rounded text-[var(--color-text)] placeholder-[var(--color-accent)] quintessential-regular"
              />
            </div>

            <button
              type="submit"
              className="border border-[var(--color-secondary)] px-6 py-2 transition-all quintessential-regular hover:bg-[var(--color-secondary)] hover:text-[var(--color-light)]"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative section-with-frame">
        <Frame3 />
        <RingsVector />
        <div className="section-content">
          <h1 className="title-special text-7xl mb-4">
            <span>T</span>
            <span className="ampersand">&</span>
            <span>S</span>
          </h1>
          <p className="text-xl quintessential-regular mb-4">LOS MEJORES MOMENTOS DE LA VIDA MERECEN SER COMPARTIDOS</p>
          <h3 className="text-2xl quintessential-regular">¡Gracias por acompañarnos!</h3>
        </div>
      </section>

      {showToast && <Toast message="¡Listo!" onClose={() => setShowToast(false)} />}
    </div>
  );
}

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="font-sans">
      {!showMain ? (
        <WelcomePage onEnter={() => setShowMain(true)} />
      ) : (
        <MainContent />
      )}
    </div>
  );
}

export default App;