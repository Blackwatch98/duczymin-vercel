import Image from 'next/image';
import { FC } from 'react';
import styles from '../styles/Review.module.css'
import { StarIcon } from "@heroicons/react/24/outline";

export type ReviewProps = {

    src: string;
    rating: number;
    name: string;
    text: string;
};


const Review: FC<ReviewProps> = ({
    src, rating, text, name,
}) => (
	<div className={styles.opinionCard}>
		<h3>{name}</h3>
		<p className={styles.opinionText}>{text}</p>
		<p className={styles.rating}>Ocena: {rating}/5 <StarIcon width={18}></StarIcon></p>
	</div>
);

export default Review;