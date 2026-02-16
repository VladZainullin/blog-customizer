import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

import { ReactNode, useState } from 'react';

type ArticleParamsFormProps = {
	children: ReactNode;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const onClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onClick} />
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<span className={styles.title}>Задайте параметры</span>
					{props.children}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
