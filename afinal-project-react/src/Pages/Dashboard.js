import "../css/resources.css";
function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="header">
        <a href="/dashboard" className="logo">
          Mental Health Dashboard
        </a>
        <div className="header-right">
          <a className="active" href="/dashboard">
            Home
          </a>
          <a href="/profile">Profile</a>
          <a href="/">Logout</a>
        </div>
      </div>
      <div class="cont">
        <div class="card">
          <div class="container">
            <a href="http://www.suicidepreventionlifeline.org style">
              <b>National Suicide Prevention Lifeline</b>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="https://www.crisistextline.org">
              <b>Crisis Text Line</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="https://www.thehotline.org">
              <b>National Domestic Violence Hotline"</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="https://www.childhelp.org/hotline">
              <b>National Child Abuse Hotline</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="https://www.samhsa.gov/disaster-preparedness">
              <b>Disaster Distress Hotline</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="https://rainn.org">
              <b>National Sexual Assault Hotline</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="https://www.thetrevorproject.org/about/programs-services/trevor-lifeline">
              <b>The Trevor Project</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="https://www.veteranscrisisline.ne" t>
              <b>Veteran's Crisis Line</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="https://www.mentalhealth.gov/get-help/veterans">
              <b>Help for Military Service Members and Their Families</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="https://findtreatment.gov">
              <b>Substance Abuse Treatment</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="http://locator.apa.org/?_ga=1.122738379.1939913089.1455299072">
              <b>Find a Psychologist</b>
            </a>
            <p></p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p></p>
            <a href="http://finder.psychiatry.org/?_ga=1.178573348.1294726899.1456165962">
              <b>Find a Psychiatrist</b>
            </a>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
