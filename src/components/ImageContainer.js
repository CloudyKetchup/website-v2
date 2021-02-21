import React, { forwardRef, useEffect, useState } from "react";

import Image from "next/image";

import { useDimensions } from "../hooks";

const ImageContainer = forwardRef(({ imageSrc, imageProps, ...props }) => {
	const [ref, dimensions] = useDimensions();

	return (
		<div {...props} ref={ref}>
			<Image
				{...imageProps}
				src={imageSrc}
				width={dimensions.width}
				height={dimensions.height}
			/>
		</div>
	);
});

export default ImageContainer;