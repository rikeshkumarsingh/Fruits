import React from 'react'
import '../lib/boots.css'
import '../lib/custom.css'
import about from '../img/about.png';
import litchi1 from '../img/litchi1.jpg';
import litchi2 from '../img/litchi2.jpg';
import litchi3 from '../img/litchi3.jpg';
import litchi4 from '../img/litchi4.jpg';
import litchi5 from '../img/litchi5.jpg';
import litchi6 from '../img/litchi6.jpg';
import litchi7 from '../img/litchi7.jpg';
import litchi8 from '../img/litchi8.jpg';
import litchi9 from '../img/litchi9.jpg';
import litchi10 from '../img/litchi10.jpg';
import litchi11 from '../img/litchi11.jpg';
import litchi12 from '../img/litchi12.jpg';
import litchi13 from '../img/litchi13.jpg';
import litchi14 from '../img/litchi14.jpg';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start bg-ground">
              <h1 className="display-1 text-white mb-md-4">Product details</h1>
              <Link to={'/'} className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
              <Link to={'/contect'} className="btn btn-secondary py-md-3 px-md-5">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid banner2 mb-5 ">
        <div className="container">
          <div className="row gx-0 box">
            <div className="col-md-6">
              <div className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5" style={{ height: 300 }}>
                <h3 className="text-white mb-3">Organic Litchis</h3>
                <p className="text-white">Experience the deliciously sweet and juicy taste of our organic litchis, grown naturally without synthetic chemicals. Perfect for a healthy and refreshing treat!</p>
                <a className="text-white fw-bold" href>Read More<i className="bi bi-arrow-right ms-2" /></a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5" style={{ height: 300 }}>
                <h3 className="text-white mb-3">Organic Fruits</h3>
                <p className="text-white">Enjoy the pure taste of nature with our organic fruits, grown without synthetic chemicals. Savor the freshness and health benefits in every bite!</p>
                <a className="text-white fw-bold" href>Read More<i className="bi bi-arrow-right ms-2" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary feature pb-lg-0 my-5 ">
        <div className="container py-5 pb-lg-0">
          <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: 500 }}>
            <h6 className="text-uppercase text-secondary">Varieties</h6>
            <h1 className="display-5 text-white mb-5">We produce a large variety of litchis!!!</h1>
          </div>

        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi1} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">1.</h2>
                <h1 className="display-5">Shahi</h1>
              </div>
              <p className="mb-4">This is one of the commercial cultivar cultivated for table purpose in Muzaffarpur area of Bihar, which
                matures, in the third week of May. Fruits are oval and oblong conical in shape and crimson-red
                tubercles appear on uranium-green background at maturity. It is heavy bearing variety with large fruits
                and average yield of 90-100kg/tree.
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">

            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">2.</h2>
                <h1 className="display-5">Swarna Roopa </h1>
              </div>
              <p className="mb-4">It is a selection in litchi identified and released by CHES, Ranchi with high T.S.S and resistant to fruit
                cracking. This is the first variety developed in India.</p>

            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi2} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary  box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi3} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">3.</h2>
                <h1 className="display-5">China</h1>
              </div>
              <p className="mb-4">It is commercially cultivated for table purpose in Muzaffarpur area of Bihar. It is a semi-dwarf variety
                with fruits ripening from the third week of May. Average yield is 80-100 kg/tree. Fruits are mediumlarge, globose, with a mixture of red and orange colour.
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">

            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">4.</h2>
                <h1 className="display-5">Kasba</h1>
              </div>
              <p className="mb-4">It is mostly grown in eastern part of Bihar. Fruits medium-large, heart-shaped with red tubercles on
                reddish background at maturity. It ripens during the first week of June. Average yield is 80/100 kg/tree.
              </p>

            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary  box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi4} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi5} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">5.</h2>
                <h1 className="display-5">Elachi</h1>
              </div>
              <p className="mb-4">As a dedicated farmer, I take pride in growing organic litchis that are perfect for your family. Our litchis are cultivated without the use of synthetic chemicals, ensuring they are not only deliciously sweet and juicy but also healthy and safe. Each litchi is handpicked at the peak of ripeness to guarantee the best flavor and nutritional value. Enjoy the natural goodness and freshness of our organic litchis, knowing they are produced with care and commitment to quality.</p>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">

            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">6.</h2>
                <h1 className="display-5">Purbi</h1>
              </div>
              <p className="mb-4">It is mostly grown for table purpose in eastern part of Bihar. Fruits are medium-large, oblong-conical in
                shape, which ripen at the end of May or first week of June. At maturity red tubercles appear on pinkish
                brown background. The average yield is 90-100 kg/tree.</p>

            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi6} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary  box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi7} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">7.</h2>
                <h1 className="display-5">Early Seedless (Syn. Early Bedana) </h1>
              </div>
              <p className="mb-4"> It is the earliest variety and is mainly grown for table purpose and processing in Uttar Pradesh and
                Punjab. It is a medium to poor-yielding variety but bears regularly. The yield of fruit varies from 50-60
                kg/tree. Fruits are small to medium in size, heart to oval in shape with carmine red tubercles at
                maturity. Pulp is creamy white with T.S.S. 19.8%. Overall fruit quality is good.</p>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">

            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">8.</h2>
                <h1 className="display-5">Rose Scented</h1>
              </div>
              <p className="mb-4">As a dedicated farmer, I take pride in growing organic litchis that are perfect for your family. Our litchis are cultivated without the use of synthetic chemicals, ensuring they are not only deliciously sweet and juicy but also healthy and safe. Each litchi is handpicked at the peak of ripeness to guarantee the best flavor and nutritional value. Enjoy the natural goodness and freshness of our organic litchis, knowing they are produced with care and commitment to quality.</p>

            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary  box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi8} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary  box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi9} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">9.</h2>
                <h1 className="display-5">Calcutta (Syn. Kalkattia)</h1>
              </div>
              <p className="mb-4">It is the best of all the varieties grown in northern parts of India for table purpose. It can be successfully
                cultivated even in hotter areas provided there is protection from strong hot winds and provision for
                plenty of water for irrigation. The average yield is 80-100 kg/tree. It is a late season variety and the fruits
                ripen in the last week of June. Trees of this variety attain an average height of 4m and spread of 6 m.
                Fruits are large in size, oblong, with tyrian rose colour and dark tubercles at maturity. Pulp is dirty
                creamy white, soft, juicy, very sweet with T.S.S. 18.17%.</p>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">

            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">10.</h2>
                <h1 className="display-5">Bombai</h1>
              </div>
              <p className="mb-4">This is an important commercial variety cultivated for table purpose in West Bengal. It ripens during
                first to second week of May. The trees are vigorous and attain an average height of 6.7 m and spread 7-
                8 m. Average yield is 80-90 kg/tree. Fruits are large in size, mostly obliquely heart-shaped colour at
                maturity with carmine red tubercles on uranium-green background. In this variety each developed fruit
                has another tiny under-developed fruit attached to the fruit stalk. Pulp is greyish-white, soft juicy with
                T.S.S. 17%.
              </p>

            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi10} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary  box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi11} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">11.</h2>
                <h1 className="display-5">Late Seedless (Syn. Late Bedana)</h1>
              </div>
              <p className="mb-4">This variety is not completely devoid of seed but it is rather shrivelled and small in size. It can be
                successfully cultivated even in hotter areas provided there is protection from strong hot winds and
                provision for plenty of water for irrigation. The trees of this variety are very vigorous and attain an
                average height of 5.5 m and spread of 7.0m. It is a late season variety and fruits usually ripen in the third
                week of June, The average yield is 80-100 kg/ tree. Fruits are medium to large in size, conical in shape,
                colour at maturity vermilion to carmine with dark-blackish brown tubercles. Pulp is creamy- white, soft,
                juicy with T.S.S. 20% Overall quality is very good. It is cultivated for table and processing purpose.</p>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">

            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">12.</h2>
                <h1 className="display-5">Dehra Dun </h1>
              </div>
              <p className="mb-4">This variety is mainly grown for table purpose in Uttar Pradesh and Punjab. In Bihar, it is cultivated
                under the name of 'Dehra-Rose'. It is a late-season variety and fruits start ripening in third week of
                June. Fruit yield is 80-90 kg/tree. Trees are medium in size attaining a height of 5 m and spread of 7 m.
                Fruits are medium in size, obliquely heart-shaped to conical, colour at maturity bright rose pink. Pulp is
                greyish-white, soft moderately juicy with T.S.S. 17%. This variety is highly susceptible to sunburn and
                cracking.</p>

            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi12} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary  box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi13} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">13.</h2>
                <h1 className="display-5">Gulabi</h1>
              </div>
              <p className="mb-4">This is another important variety cultivated for table purpose in north India. It is a late-season variety
                and fruit ripens in fourth week of June. It bears profusely and regularly with 90-100 kg fruits/tree. Trees
                attain a height of 6.0 m and spread of 7.0 m. Fruits are medium in size, oblong-oval heart-shaped,
                mandarin red tubercles appear on shrimp red to carmine red background at maturity. Pulp is greyish
                white, firm sweet with T.S.S. 18.2%.</p>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">

            <div className="col-lg-7 pb-5">
              <div className="mb-3 pb-2">
                <h2 className="text-primary text-uppercase">14.</h2>
                <h1 className="display-5">Late Large Red </h1>
              </div>
              <p className="mb-4">It is one of the important litchi varieties mainly grown in Bihar and its adjacent states. This variety bears
                profusely every year with an average yield of 80-100 kg/tree. Fruits are large in size, oval or oblongconical with crimson red tubercles. Pulp greyish white. Soft moderately juicy with T. S. S. 20.3%. </p>

            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <div className="d-flex product border border-5 border-primary box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto product-image" src={litchi14} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-4'>

      </div>
    </div>
  )
}

export default Product