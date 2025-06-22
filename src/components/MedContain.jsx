import React from 'react';
import './MedContain.css';

const MedContain = () => {
  return (
    <section className="medcontain-container">
      <div className="medcontain-content">
      <h1>Welcome to CyberSecure</h1>
<p>
  CyberSecure is an intelligent security monitoring system designed to protect your digital infrastructure. 
  It ensures real-time threat detection, proactive alerts, and seamless security management across devices and networks.
</p>
<ul>
  <li>🛡️ Real-time intrusion detection and prevention</li>
  <li>🔔 Instant alerts for suspicious activities</li>
  <li>📊 Detailed analytics & security reports</li>
  <li>🤖 AI-powered anomaly detection</li>
</ul>
<button className="med-btn">Explore System</button>

      </div>
    </section>
  );
};

export default MedContain;
