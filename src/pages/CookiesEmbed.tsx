import React from "react";

const CookiesEmbed = () => {
  const embedHTML = `
    <style>
      [data-custom-class='body'], [data-custom-class='body'] * {
        background: transparent !important;
        font-family: Arial !important;
        font-size: 14px !important;
        color:rgb(201, 201, 201) !important;
      }
      [data-custom-class='title'], [data-custom-class='title'] * {
        font-size: 26px !important;
        color:rgb(255, 255, 255) !important;
      }
      [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
        font-size: 17px !important;
        color:rgb(243, 243, 243) !important;
        font-family: Arial !important;
      }
      [data-custom-class='body_text'], [data-custom-class='body_text'] * {
        font-size: 14px !important;
        color:rgb(201, 201, 201) !important;
        font-family: Arial !important;
      }
      ul {
        list-style-type: square;
        padding-left: 20px;
      }
    </style>

    <div data-custom-class="body">
      <div data-custom-class="title"><strong>Cookies and Similar Technologies</strong></div>
      <div style="height: 12px;"></div>
      <p data-custom-class="body_text">
        Although our app does not use traditional browser cookies, we and our third-party service providers may use similar technologies to collect and process certain types of information from your device.
      </p>
      <div data-custom-class="heading_2"><strong>Technologies We Use</strong></div>
      <p data-custom-class="body_text">
        Our app uses services provided by <strong>Google Firebase</strong> and <strong>Google AdMob</strong>, which may collect data through device identifiers and app interactions:
      </p>
      <ul>
        <li data-custom-class="body_text"><strong>Firebase Analytics</strong> – to understand how users interact with the app</li>
        <li data-custom-class="body_text"><strong>Firebase Crashlytics</strong> – to detect crashes and improve stability</li>
        <li data-custom-class="body_text"><strong>Google AdMob</strong> – to display ads and measure their performance</li>
      </ul>
      <div data-custom-class="heading_2"><strong>Types of Data Collected</strong></div>
      <p data-custom-class="body_text">These technologies may collect:</p>
      <ul>
        <li data-custom-class="body_text">Device identifiers (such as IDFA)</li>
        <li data-custom-class="body_text">App usage data (e.g., screen views, taps, sessions)</li>
        <li data-custom-class="body_text">Location data, if you grant location permission</li>
      </ul>
      <div data-custom-class="heading_2"><strong>Your Privacy Controls</strong></div>
      <p data-custom-class="body_text">You can control tracking and data collection through your iPhone’s settings:</p>
      <ul>
        <li data-custom-class="body_text"><strong>Settings &gt; Privacy &amp; Security &gt; Tracking</strong> – to manage which apps are allowed to track you</li>
        <li data-custom-class="body_text"><strong>Settings &gt; Privacy &amp; Security &gt; Location Services</strong> – to control location access</li>
      </ul>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: embedHTML }} />;
};

export default CookiesEmbed;
