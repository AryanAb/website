import postStyles from "../styles/post.module.css";

export const H1 = props => {
	return <h1 className={postStyles.h1}>{props.children}</h1>
};

export const H2 = props => {
	return <h2 className={postStyles.h2}>{props.children}</h2>
};

export const H3 = props => {
	return <h3 className={postStyles.h3}>{props.children}</h3>
};

export const H4 = props => {
	return <h4 className={postStyles.h4}>{props.children}</h4>
};

export const P = props => {
	return <p className={postStyles.p}>{props.children}</p>
};
