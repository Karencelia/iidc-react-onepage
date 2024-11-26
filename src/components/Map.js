function Map() {
    return (
        <>
  {/* Embbed   map */}
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0515592997285!2d6.318390373439563!3d4.931030995044984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a055be1dcce59%3A0xa6c5b6a97ac6c1a!2sNitro%20Studios!5e0!3m2!1sen!2sng!4v1727795628840!5m2!1sen!2sng"
      width={600}
      height={450}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="map"
    />
    <div className="bottomGrey">
      <img src="/Assets/IMG/shape-top-grey-80.png" alt="" width={100} />
    </div>
  </div>
</>

    )
}

export default Map;