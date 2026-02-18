import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

import React, {
	FormEventHandler,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';

type ArticleParamsFormProps = {
	children: ReactNode;
	onClear?: () => void;
	onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const asideRef = useRef<HTMLDivElement>(null);

	const onClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const onMouseDown = (event: MouseEvent) => {
		const clickedElement = event.target as Node;

		if (!asideRef.current?.contains(clickedElement)) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', onMouseDown);
		return () => {
			document.removeEventListener('mousedown', onMouseDown);
		};
	}, [isMenuOpen]);

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} onClick={onClick} />
			<aside
				ref={asideRef}
				className={`${styles.container} ${
					isMenuOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form} onSubmit={props.onSubmit}>
					<span className={styles.title}>Задайте параметры</span>
					{props.children}
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={props.onClear}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
