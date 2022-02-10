import React from "react";
import Slider from "react-slick";
import styled from '@emotion/styled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 600px;
}
.slick-next:before, .slick-prev:before {
    color: #480af3
    ;
}
`

const SliderDesign = styled(Slider)`
    img{
        max-width: 360px;
        max-height: 360px;
    }
`

export default function SimpleSlider() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="container">
				<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
				<h2> Cats Meow</h2>
				<SliderDesign {...settings}>
					<div>
						<img src="http://placekitten.com/g/400/300" />
					</div>
					<div>
						<img src="http://placekitten.com/g/400/200" />
					</div>
					<div>
						<img src="http://placekitten.com/g/400/400" />
					</div>
					<div>
						<img src="http://placekitten.com/g/400/500" />
					</div>
					<div>
						<img src="http://placekitten.com/g/400/600" />
					</div>
					<div>
						<img src="http://placekitten.com/g/400/700" />
					</div>
				</SliderDesign>
			</div>
		);
	
}

