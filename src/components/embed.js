import React from "react"
const Embed = ({ videoSrcURL, videoTitle, ...props }) => (
  <div class="embeded-video">
    <div>
      <div>
        <iframe
          width="560"
          height="315"
          src={videoSrcURL}
          title={videoTitle}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
)
export default Embed
