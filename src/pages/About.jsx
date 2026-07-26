import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const mockData = [
  {
    menu: "INTRO",
    active: true,
    goitem: "#goItem01",
  },
  {
    menu: "SKILLS",
    active: false,
    goitem: "#goItem02",
  },
  {
    menu: "CAREER",
    active: false,
    goitem: "#goItem03",
  },
];

const About = () => {
  const [leftMenu, setLeftMenu] = useState(mockData);

  const { headerRef } = useOutletContext();

  useEffect(() => {
    
  }, []);

  const leftGoItem = (e, goitem,index) => {
    const thisPosTarget = document.querySelector(goitem);
    let headerWrapHeight = headerRef.current ? headerRef.current.getBoundingClientRect().height : 0;

    if(!thisPosTarget){return}

    const thisPosTargetPos = thisPosTarget.getBoundingClientRect().top + window.scrollY;

    const copyMenu = leftMenu.map((item, loopIndex) => ({
      ...item,
      active: loopIndex === index,
    }));

    setLeftMenu(copyMenu);

    window.scrollTo({
      top: thisPosTargetPos - headerWrapHeight - 50,
      behavior: "smooth",
    });
  }

  return (
    <section className="middle-wrap">
      <div className="middle-templete">
        <div className="middle-left-cols">
          <div className="middle-left-item">
            <h2 className="middle-left-title">ABOUT</h2>
            <ul className="middle-menu-list">
              {leftMenu.map(({ menu, active, goitem }, index) => {
                return (
                  <li key={index}>
                    <button className={["middle-menu",active && "active"].filter(Boolean).join(" ")} onClick={(e) => leftGoItem(e,goitem,index)}>{menu}</button>
                  </li>
                );
              })}
              {/* <li>
                <a href="#goItem01" className="middle-menu active">
                  INTRO
                </a>
              </li>
              <li>
                <a href="#goItem02" className="middle-menu">
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#goItem03" className="middle-menu">
                  CAREER
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="middle-right-cols">
          <div className="middle-right-content">
            {/* <!-- Intro --> */}
            <div className="middle-item profile-wrap" id="goItem01">
              <div className="profile-main-row">
                <div className="profile-item">
                  <div className="profile-thum-cols">
                    <img src="/images/profile_pencil.jpg" alt="" />
                  </div>
                  <div className="profile-spec-cols">
                    <p className="profile-main-name">
                      <span className="profile-main-kor">김인경</span>
                      <span className="profile-main-eng">In Kyung Kim</span>
                      <a
                        href="https://www.instagram.com/invites/contact/?i=3dakqjwlsfo0&utm_content=6kmmqbd"
                        target="_blank"
                        className="profile-icon icon-insta"
                      ></a>
                    </p>
                    <p className="profile-main-unit">
                      Frontend Developer / Publisher / UI Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="profile-detail-row">
                안녕하세요. 저는 퍼블리셔 15년차 김인경입니다.
                <br />
                저는 디자인 전공으로 디자인 및 퍼블리싱으로 웹을 시작했습니다.
                <br />
                하지만 시간이 지나면서 퍼블리싱에 집중이 되면서 현재 퍼블리싱
                경력으로 계속 활동중입니다. 시간이 좀 지나고 경력이 쌓이면서
                프로젝트 PL로 구축 및 운영에서 역할도 오래 해오면서 후임
                퍼블리셔와 피드백을 통해서 좋은 코드 결과물을 창출하며 팀원들과
                좋은 추억도 많이 만들었습니다.
                <br />
                그리고 프로젝트를 진행하면서 서로 협업가능한 부분은 도우면서
                개발자 및 디자이너 업무 협업을 해서 좋은 결과물을 창출하는 것에
                있어 업무에 보람을 느낍니다. 그래서 늘 디자이너와 개발자와의
                좋은 결과물을 창출하는 브릿지 역할로서 성공적인 프로젝트 이행에
                있어 저는 꼭 중요한 사람이 되고 싶습니다.
                <br />
                <br />
                저는 또한 감각적이고 효율적인 코드 설계를 좋아하며 최신 기술 및
                트렌드는 늘 끊임없이 찾아봅니다. 최근에는 프론트엔드 기술로
                주가가 높은 vue 및 react에 관심이 많아 온라인 영상강좌나
                오프라인 모임을 통해 정보를 공유받고 새로운 기술을 익힐려고
                최선을 다합니다.
                <br />
                저는 회사에서 능력이 좋고 평판이 좋은것도 좋지만 그것보다 꼭
                필요한 사람이 되고 싶습니다.
              </div>
              <div className="design-obj-wrap">
                <span className="design-obj">&lt;/&gt;</span>
              </div>
            </div>
            {/* <!-- //Intro --> */}
            {/* <!-- SKILLS --> */}
            <div className="middle-item skills-wrap" id="goItem02">
              <div className="skill-data-table">
                <div className="skill-data-tr">
                  <div className="skill-data-th">
                    <div className="skill-label-group">
                      <i className="skill-ico html-ico"></i>
                    </div>
                  </div>
                  <div className="skill-data-td">
                    <div className="data-chart-item html-item">
                      <div className="data-chart-current" style={{width: "90%"}}>
                        <span className="data-chart-current-text">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-data-tr">
                  <div className="skill-data-th">
                    <div className="skill-label-group">
                      <i className="skill-ico css-ico"></i>
                    </div>
                  </div>
                  <div className="skill-data-td">
                    <div className="data-chart-item css-item">
                      <div className="data-chart-current" style={{width: "90%"}}>
                        <span className="data-chart-current-text">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-data-tr">
                  <div className="skill-data-th">
                    <div className="skill-label-group">
                      <i className="skill-ico scss-ico"></i>
                    </div>
                  </div>
                  <div className="skill-data-td">
                    <div className="data-chart-item scss-item">
                      <div className="data-chart-current" style={{width: "80%"}}>
                        <span className="data-chart-current-text">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-data-tr">
                  <div className="skill-data-th">
                    <div className="skill-label-group">
                      <i className="skill-ico jquery-ico"></i>
                    </div>
                  </div>
                  <div className="skill-data-td">
                    <div className="data-chart-item jquery-item">
                      <div className="data-chart-current" style={{width: "90%"}}>
                        <span className="data-chart-current-text">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-data-tr">
                  <div className="skill-data-th">
                    <div className="skill-label-group">
                      <i className="skill-ico bs-ico"></i>
                    </div>
                  </div>
                  <div className="skill-data-td">
                    <div className="data-chart-item js-item">
                      <div className="data-chart-current" style={{width: "80%"}}>
                        <span className="data-chart-current-text">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-data-tr">
                  <div className="skill-data-th">
                    <div className="skill-label-group">
                      <i className="skill-ico vue-ico"></i>
                    </div>
                  </div>
                  <div className="skill-data-td">
                    <div className="data-chart-item vue-item">
                      <div className="data-chart-current" style={{width: "80%"}}>
                        <span className="data-chart-current-text">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-data-tr">
                  <div className="skill-data-th">
                    <div className="skill-label-group">
                      <i className="skill-ico react-ico"></i>
                    </div>
                  </div>
                  <div className="skill-data-td">
                    <div className="data-chart-item react-item">
                      <div className="data-chart-current" style={{width: "80%"}}>
                        <span className="data-chart-current-text">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- // SKILLS --> */}
            {/* <!-- CAREER --> */}
            <div className="middle-item career-wrap" id="goItem03">
              <div className="timeline-list-wrap">
                <ul className="timeline-list">
                  <li>
                    <div className="timeline-item">
                      <div className="timeline-thum-row">
                        <img
                          src="/images/career_bstones.png"
                          alt="bstones"
                        />
                      </div>
                      <div className="timeline-spec-row">
                        <div className="timeline-spec-title-group">
                          <p className="timeline-spec-title">(주)비스톤스</p>
                          <p className="timeline-spec-while">
                            2025.02 ~ 2026.08
                          </p>
                          <p className="timeline-spec-level">
                            프로젝트 퍼블리셔 PL / 운영 PA
                          </p>
                        </div>
                        <div className="timeline-tail-group">
                          <p className="timeline-spec-tail">
                            구축 프로젝트 퍼블리셔 PL 및 CMS 운영 프로젝트 PA
                          </p>
                          <ul className="timeline-project-list">
                            <li>
                              현대백화점 패션브랜드 한섬 EQL 편집샾 구축
                              퍼블리셔 PL
                            </li>
                            <li>
                              신한카드 마이카 법인비대면/즉시출고 서비스 구축
                              퍼블리셔 PL(CMS)
                            </li>
                            <li>신한카드 운영 퍼블리셔 PA(CMS)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-item">
                      <div className="timeline-thum-row">
                        <img
                          src="/images/career_vinylc.png"
                          alt="vinylc"
                        />
                      </div>
                      <div className="timeline-spec-row">
                        <div className="timeline-spec-title-group">
                          <p className="timeline-spec-title">(주)바이널씨</p>
                          <p className="timeline-spec-while">
                            2023.07 ~ 2024.09
                          </p>
                          <p className="timeline-spec-level">
                            프로젝트 퍼블리셔 PL(계약직)
                          </p>
                        </div>
                        <div className="timeline-tail-group">
                          <p className="timeline-spec-tail">
                            현대백화점 포털 및 앱 통합운영
                          </p>
                          <ul className="timeline-project-list">
                            <li>
                              현대백화점 기획 고객사 및 IT 개발팀과 직접
                              소통하며 운영
                            </li>
                            <li>
                              팀원과 적극적인 피드백으로 효율적인 코드 운영
                            </li>
                            <li>팀원의 성장을 위한 소스 피드백 적극 소통</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-item">
                      <div className="timeline-thum-row">
                        <img
                          src="/images/career_etribe.png"
                          alt="etribe"
                        />
                      </div>
                      <div className="timeline-spec-row">
                        <div className="timeline-spec-title-group">
                          <p className="timeline-spec-title">(주)이트라이브</p>
                          <p className="timeline-spec-while">
                            2021.03 ~ 2023.06
                          </p>
                          <p className="timeline-spec-level">UX 그룹 차장</p>
                        </div>
                        <div className="timeline-tail-group">
                          <p className="timeline-spec-tail">
                            운영/구축 프로젝트 퍼블리싱 PL 및 매월 진행하는
                            코드리뷰를 통한 후배양성
                          </p>
                          <ul className="timeline-project-list">
                            <li>MG 새마을금고 공제앱 VUE 구축</li>
                            <li>SK T 멤버쉽 글로벌 여행 반응형웹 구축</li>
                            <li>롯데홈쇼핑 wyd, iTOO 플랫폼 운영</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-item">
                      <div className="timeline-thum-row type2">
                        <img
                          src="/images/career_inpix.png"
                          alt="inpix"
                        />
                      </div>
                      <div className="timeline-spec-row">
                        <div className="timeline-spec-title-group">
                          <p className="timeline-spec-title">(주)인픽스</p>
                          <p className="timeline-spec-while">
                            2015.06 ~ 2020.12
                          </p>
                          <p className="timeline-spec-level">Fd그룹 과장</p>
                        </div>
                        <div className="timeline-tail-group">
                          <p className="timeline-spec-tail">
                            다수의 대기업 및 보험뱅킹 운영/구축 프로젝트
                            퍼블리싱 PL
                          </p>
                          <ul className="timeline-project-list">
                            <li>푸본현대생명 온라인플랫폼 운영</li>
                            <li>
                              삼성닷컴 서포트 리뉴얼 및 글로벌 확산 반응형 구축
                            </li>
                            <li>삼성바이오로직스 리뉴얼 반응형 구축</li>
                            <li>농협스마트알리미앱 반응형 구축</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-item">
                      <div className="timeline-thum-row">
                        <img src="/images/career_eluo.png" alt="eluo" />
                      </div>
                      <div className="timeline-spec-row">
                        <div className="timeline-spec-title-group">
                          <p className="timeline-spec-title">
                            (주)엘루오씨앤씨
                          </p>
                          <p className="timeline-spec-while">
                            2014.05 ~ 2015.05
                          </p>
                          <p className="timeline-spec-level">R&D본부 대리</p>
                        </div>
                        <div className="timeline-tail-group">
                          <p className="timeline-spec-tail">
                            다수의 대기업 구축/운영 프로젝트에 참여 및 사내
                            자바스크립트 스터디 강의
                          </p>
                          <ul className="timeline-project-list">
                            <li>KT 올레샵 운영 유지보수 프로젝트</li>
                            <li>엘리시안 리뉴얼 구축 프로젝트</li>
                            <li>
                              메이블린 뉴욕 100주년 마이크로사이트 반응형웹
                              프로젝트
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-item">
                      <div className="timeline-thum-row">
                        <img
                          src="/images/career_hk.png"
                          alt="homepagekorea"
                        />
                      </div>
                      <div className="timeline-spec-row">
                        <div className="timeline-spec-title-group">
                          <p className="timeline-spec-title">
                            (주)홈페이지코리아
                          </p>
                          <p className="timeline-spec-while">
                            2011.11 ~ 2014.04
                          </p>
                          <p className="timeline-spec-level">VIP3팀 파트장</p>
                        </div>
                        <div className="timeline-tail-group">
                          <p className="timeline-spec-tail">
                            다수의 대기업 및 관공서 구축/운영 프로젝트에 참여 및
                            퍼블리싱팀원 관리
                          </p>
                          <ul className="timeline-project-list">
                            <li>국민연금 신규기금홈페이지 웹접근성 구축</li>
                            <li>오리온 웹접근성 고도화</li>
                            <li>한국HD방송 채널아이티 운영</li>
                            <li>수원 호매실 U-City 웹접근성 구축</li>
                            <li>농림수산업자 신용보증기금 웹접근성 구축</li>
                            <li>크린토피아 홈페이지 구축</li>
                            <li>SK T-ad 플래폼 고도화 구축</li>
                            <li>엠게임/와글 프린세스메이커 구축</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-item">
                      <div className="timeline-thum-row">
                        <img
                          src="/images/career_nblis.png"
                          alt="nblis"
                        />
                      </div>
                      <div className="timeline-spec-row">
                        <div className="timeline-spec-title-group">
                          <p className="timeline-spec-title">(주)엔블리스</p>
                          <p className="timeline-spec-while">
                            2011.06 ~ 2011.10
                          </p>
                          <p className="timeline-spec-level">디자인1팀 주임</p>
                        </div>
                        <div className="timeline-tail-group">
                          <p className="timeline-spec-tail">
                            관공서 프로젝트 메인웹퍼블리셔 및 서브디자이너 수행
                          </p>
                          <ul className="timeline-project-list">
                            <li>
                              농림수산식품기술기획평가원 리뉴얼 및 웹접근성
                              고도화(4개월 파견계약직)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-item">
                      <div className="timeline-thum-row">
                        <img
                          src="/images/career_efront.png"
                          alt="efront"
                        />
                      </div>
                      <div className="timeline-spec-row">
                        <div className="timeline-spec-title-group">
                          <p className="timeline-spec-title">(주)이프론트</p>
                          <p className="timeline-spec-while">
                            2009. 11 ~ 2011. 03
                          </p>
                          <p className="timeline-spec-level">디자인1팀 사원</p>
                        </div>
                        <div className="timeline-tail-group">
                          <p className="timeline-spec-tail">
                            웹에이전시 첫 회사로 입사하여 디자이너 및 퍼블리셔,
                            다수의 구축/운영 프로젝트 PL
                          </p>
                          <div className="timeline-project-item-group">
                            <div className="timeline-project-item">
                              <p className="timeline-project-title">구축</p>
                              <ul className="timeline-project-list">
                                <li>
                                  현대병원 홍보홈페이지(www.hdgh.co.kr/main.php)
                                </li>
                                <li>
                                  피자알볼로 프렌차이즈(www.pizzaalvolo.co.kr/)
                                </li>
                                <li>퓨렉스 기업홈페이지(www.furex.co.kr)</li>
                                <li>탑텍 기업홈페이지(www.toptek.co.kr)</li>
                                <li>
                                  청호인재개발원
                                  기업홈페이지(www.chunghoacademy.co.kr/)
                                </li>
                                <li>
                                  인천중앙학원 학원홈페이지(www.lnc0125.com/)
                                </li>
                                <li>
                                  이노바투스
                                  영어교재쇼핑몰(www.innovatusmall.com)
                                </li>
                                <li>
                                  위너스킨 화장품쇼핑몰(www.winnerskin.co.kr)
                                </li>
                                <li>
                                  영초크아트 개인홈페이지(www.youngchalk.com)
                                </li>
                                <li>
                                  엠피인터렉티브
                                  기업홈페이지(www.mpinteractive.co.kr)
                                </li>
                                <li>
                                  에이씨엔피
                                  기업영문홈페이지(www.acnp.co.kr/eng/)
                                </li>
                                <li>
                                  에이비씨무역 기업홈페이지(www.abctrd.com/)
                                </li>
                                <li>
                                  씨에스토탈 기업홈페이지(www.cstotal.co.kr/)
                                </li>
                                <li>
                                  쌍방울 기업영문홈페이지(www.sbw.co.kr/eng/)
                                </li>
                                <li>송월타올 수건쇼핑몰(www.swsh.co.kr)</li>
                                <li>서산재래식맛김 쇼핑몰(www.swsh.co.kr)</li>
                                <li>
                                  메간골프 기업홈페이지(www.megangolf.co.kr/)
                                </li>
                                <li>
                                  렌탈온 공연장비렌탈몰(www.rentalon.co.kr)
                                </li>
                                <li>
                                  라이브파워 공연홈페이지(www.livepower.co.kr)
                                </li>
                                <li>
                                  드라마치과 병원홈페이지(www.dramaclinic.com)
                                </li>
                                <li>당진청삼 쇼핑몰(www.djchungsam.com)</li>
                                <li>
                                  노무법인유앤 기업홈페이지(www.unhr.co.kr)
                                </li>
                                <li>
                                  FC한마음 유소년축구홈페이지(www.fchana.com)
                                </li>
                                <li>
                                  (주)이프론트 모바일홈페이지(www.m.1004hp.com)
                                </li>
                              </ul>
                            </div>
                            <div className="timeline-project-item">
                              <p className="timeline-project-title">운영</p>
                              <ul className="timeline-project-list">
                                <li>열린미래학교(www.miraeschool.com)</li>
                                <li>마리스코(www.mariscos.co.kr)</li>
                                <li>오산시설관리공단(www.osansisul.or.kr/)</li>
                                <li>오산문화예술회관(www.osanart.net/)</li>
                                <li>위너스킨(www.winnerskin.co.kr)</li>
                                <li>
                                  아사히일본어학원(www.asahijapanese.co.kr)
                                </li>
                                <li>서울벽지(www.seoulwallpaper.co.kr)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- // CAREER --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
