import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const AppContainer = () => (
  <>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bespoke Bids</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col-3"> </div>
            <div className="col-6">
              <nav className="navbar navbar-expand-lg" style={{ width: 'max-content' }}>
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    <img
                      src="D:\진영/KakaoTalk_20230529_183959398.png"
                      style={{ marginLeft: '-150%' }}
                      alt="brand logo"
                      width="120"
                      height="60"
                    />
                  </a>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                      <li className="nav-item"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </li>
                      <li className="nav-item"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </li>
                      <li className="nav-item"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </li>
                      <div className="float-end">
                        <li className="nav-item ">
                          <a className="nav-link active" aria-current="page" href="#">
                            서비스 소개
                          </a>
                        </li>
                      </div>
                      <div className="float-end">
                        <form className="container-fluid justify-content-start float-end">
                          <button className="btn btn-outline-success me-2" type="button">
                            로그인
                          </button>
                        </form>
                      </div>
                      <div className="float-end">
                        {' '}
                        <form className="container-fluid justify-content-start float-end">
                          <button className="btn btn-outline-success me-2" type="button">
                            생산 의뢰하기
                          </button>
                        </form>
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="float-start">
              <h2 className="float-start" style={{ marginLeft: '20%' }}>
                로그인 / 회원가입
              </h2>
            </div>
            <div className="float-center">
              {' '}
              <hr style={{ border: 'solid 3px black', width: '60%', marginLeft: '20%' }} />
            </div>
            <div className="col"></div>
            <br />
            <div id="inputBox" className="col">
              <div className="input-form-box">
                <span className="float-start">이메일 </span>
                <input type="text" name="uid" className="form-control" />
              </div>
              <br />
              <div className="input-form-box">
                <span className="float-start">비밀번호 </span>
                <input type="password" name="upw" className="form-control" />
              </div>
              <br />
              <div className="button-login-box">
                <button type="button" className="btn btn-dark btn-xs" style={{ width: '100%' }}>
                  로그인
                </button>
                <br />
                <br />
                <br />
                <br />
                <button type="button" className="btn btn-light btn-xs" style={{ width: '100%' }}>
                  이메일로 시작하기
                </button>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-warning btn-xs"
                  style={{ width: '100%', borderColor: 'yellow', backgroundColor: 'yellow' }}
                >
                  카카오로 시작하기
                </button>
                <br />
                <br />
                <div className="input-form-box">
                  <a
                    href="#"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    <span className="float-center" style={{ fontSize: '12px', textDecoration: 'underline' }}>
                      아이디 / 비밀번호 찾기{' '}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

ReactDOM.render(<AppContainer />, rootElement);

reportWebVitals();

export default AppContainer;
