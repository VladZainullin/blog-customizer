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
	const [isOpen, setIsOpen] = useState(false);

	const asideRef = useRef<HTMLDivElement>(null);

	const onClose = (event: MouseEvent) => {
		const clickedElement = event.target as Node;

		if (!asideRef.current?.contains(clickedElement)) {
			setIsOpen(false);
		}
	};

	const onClick = () => {
		setIsOpen(!isOpen);
	};

	const onMouseDown = (event: React.MouseEvent) => {
		const clickedElement = event.target as Node;

		if (!asideRef.current?.contains(clickedElement)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', onClose);
		return () => {
			document.removeEventListener('mousedown', onClose);
		};
	}, [isOpen]);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onClick} />
			<aside
				ref={asideRef}
				onMouseDown={onMouseDown}
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
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
