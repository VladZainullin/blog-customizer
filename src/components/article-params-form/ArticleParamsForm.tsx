import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

import { OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

type ArticleParamsFormProps = {
	selectedFontFamilyClass: OptionType;
	fontFamilyClasses: OptionType[];
	selectedFontSize: OptionType;
	fontSizes: OptionType[];
	selectedFontColor: OptionType;
	fontColors: OptionType[];
	selectedBackgroundColor: OptionType;
	backgroundColors: OptionType[];
	selectedContentWidth: OptionType;
	contentWidths: OptionType[];
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	return (
		<>
			<ArrowButton isOpen={true} onClick={() => {}} />
			<aside className={`${styles.container} ${styles.container_open}`}>
				<form className={styles.form}>
					<span className={styles.title}>Задайте параметры</span>
					<Select
						title={'Шрифт'}
						selected={props.selectedFontFamilyClass}
						options={props.fontFamilyClasses}
					/>
					<RadioGroup
						name={'Размер шрифта'}
						options={props.fontSizes}
						selected={props.selectedFontSize}
						title={'Размер шрифта'}
					/>
					<Select
						title={'Цвет фона'}
						selected={props.selectedFontColor}
						options={props.fontColors}
					/>
					<Separator />
					<Select
						title={'Ширина контента'}
						selected={props.selectedContentWidth}
						options={props.contentWidths}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
