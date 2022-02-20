import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import styled from '@emotion/styled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cssstyle = `
.container {
  margin: 0 auto;
  width: 2000px;
  padding: 10px 0px 10px 0px;
}
`

// .slick-next:before, .slick-prev:before {
//     color: gold;
// }

const IMG = styled.img`
	width: 2000px;
`

const SliderDesign = styled(Slider)`
    img{
        max-width: 2000px;
        max-height: 650px;
    }
	display: flex;
`

export default function SimpleSlider() {
		const settings = {
			dots: false,
			infinite: true, // 마지막 슬라이드에서 처음 슬라이스로
			arrows: false, // 좌우 화살표를 나타낼 것인가
			speed: 500,
			autoplay: true,
			autoplayspeed: 500,
			pauseOnHover: true, // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="container">
				{/* <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
				<style>{cssstyle}</style>
				<SliderDesign {...settings}>
					<div>
						<IMG src="/images/layout/banner/Xs(4).png" />
					</div>
					<div>
						<IMG src="/images/layout/banner/Xr이미지(3).jpg" />
					</div>
					<div>
						<IMG src="/images/layout/banner/아이폰11.jpg" />
					</div>
					<div>
						<IMG src="/images/layout/banner/아이폰13.png" />
					</div>
				</SliderDesign>
			</div>
		);
	
}

