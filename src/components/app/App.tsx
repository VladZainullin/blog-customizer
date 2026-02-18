import { CSSProperties, FormEvent, useState } from 'react';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import styles from 'components/app/App.module.scss';
import { ArticleParamsForm } from 'components/article-params-form';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Article } from 'components/article';

export const App = () => {
	const [formSettings, setFormSettings] = useState({
		fontFamily: defaultArticleState.fontFamilyOption,
		fontSize: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	const [pageSettings, setPageSettings] = useState({
		fontFamily: defaultArticleState.fontFamilyOption,
		fontSize: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	const onChangeSelectedFontFamily = (value: OptionType) => {
		setFormSettings({
			...formSettings,
			fontFamily: value,
		});
	};

	const onChangeSelectedFontSize = (value: OptionType) => {
		setFormSettings({
			...formSettings,
			fontSize: value,
		});
	};

	const onChangeSelectedFontColor = (value: OptionType) => {
		setFormSettings({
			...formSettings,
			fontColor: value,
		});
	};

	const onChangeSelectedBackgroundColor = (value: OptionType) => {
		setFormSettings({
			...formSettings,
			backgroundColor: value,
		});
	};

	const onChangeSelectedContentWidth = (value: OptionType) => {
		setFormSettings({
			...formSettings,
			contentWidth: value,
		});
	};

	const clearForm = () => {
		setFormSettings({
			fontFamily: defaultArticleState.fontFamilyOption,
			fontSize: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		});

		setPageSettings({
			fontFamily: defaultArticleState.fontFamilyOption,
			fontSize: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		});
	};

	const submitForm = (event: FormEvent) => {
		event.preventDefault();

		setPageSettings({ ...formSettings });
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': pageSettings.fontFamily.value,
					'--font-size': pageSettings.fontSize.value,
					'--font-color': pageSettings.fontColor.value,
					'--container-width': pageSettings.contentWidth.value,
					'--bg-color': pageSettings.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onClear={clearForm} onSubmit={submitForm}>
				<Select
					title={'Шрифт'}
					selected={formSettings.fontFamily}
					options={fontFamilyOptions}
					onChange={onChangeSelectedFontFamily}
				/>
				<RadioGroup
					title={'Размер шрифта'}
					name={'Размер шрифта'}
					options={fontSizeOptions}
					selected={formSettings.fontSize}
					onChange={onChangeSelectedFontSize}
				/>
				<Select
					title={'Цвет шрифта'}
					selected={formSettings.fontColor}
					options={fontColors}
					onChange={onChangeSelectedFontColor}
				/>
				<Separator />
				<Select
					title={'Цвет фона'}
					selected={formSettings.backgroundColor}
					options={backgroundColors}
					onChange={onChangeSelectedBackgroundColor}
				/>
				<Select
					title={'Ширина контента'}
					selected={formSettings.contentWidth}
					options={contentWidthArr}
					onChange={onChangeSelectedContentWidth}
				/>
			</ArticleParamsForm>
			<Article fontFamily={formSettings.fontFamily} />
		</main>
	);
};
