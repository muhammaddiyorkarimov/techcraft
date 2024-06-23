import Contact from '../../components/Contact';
import './Contact.css';

function WeContact() {

  return (
    <>
      <Contact />
      <div className='we-connect'>
        <div className="container">
          <div className="main-title">Bizga xabar yo'llang</div>
          <div className="contact-card">
            <div className="about">
              <h1>Barcha savollaringizga javob beramiz</h1>
              <p>va hal qilishga yordam beramiz. Siz bilan hamkorlik qilganimizdan mamnunmiz!</p>
              <div className="status-badge">
                <span className="status-dot"></span>online
              </div>
              <div className="work-time">
                <p>Ish vaqti: 08:00 - 20:00</p>
                <span>(dam olish kunlari bundan mustasno)</span>
              </div>
            </div>
            <div className="connect-form">
              <form>
                <div>
                  <label>
                    Ism
                    <input
                      type="text"
                      name="name"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Telefon raqam
                    <input
                      type="text"
                      name="phone_number"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Izoh
                    <textarea
                      name="description"
                      required
                    ></textarea>
                  </label>
                </div>
                <button type="submit">Yuborish</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeContact;
