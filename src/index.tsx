import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [selectedFontFamilyOption, setSelectedFontFamilyOption] = useState(
		defaultArticleState.fontFamilyOption
	);

	const [selectedFontSizeOption, setSelectedFontSizeOption] = useState(
		defaultArticleState.fontSizeOption
	);

	const [selectedFontColorOption, setSelectedFontColorOption] = useState(
		defaultArticleState.fontColor
	);

	const [selectedBackgroundColorOption, setSelectedBackgroundColorOption] =
		useState(defaultArticleState.backgroundColor);

	const [selectedContentWidthOption, setSelectedContentWidthOption] = useState(
		defaultArticleState.contentWidth
	);

	const onChangeSelectedFontFamily = (value: OptionType) => {
		setSelectedFontFamilyOption(value);
	};

	const onChangeSelectedFontSize = (value: OptionType) => {
		setSelectedFontSizeOption(value);
	};

	const onChangeSelectedFontColor = (value: OptionType) => {
		setSelectedFontColorOption(value);
	};

	const onChangeSelectedBackgroundColor = (value: OptionType) => {
		setSelectedBackgroundColorOption(value);
	};

	const onChangeSelectedContentWidth = (value: OptionType) => {
		setSelectedContentWidthOption(value);
	};

	const clearForm = () => {
		setSelectedFontFamilyOption(defaultArticleState.fontFamilyOption);
		setSelectedFontSizeOption(defaultArticleState.fontSizeOption);
		setSelectedFontColorOption(defaultArticleState.fontColor);
		setSelectedBackgroundColorOption(defaultArticleState.backgroundColor);
		setSelectedContentWidthOption(defaultArticleState.contentWidth);
		setSelectedFontColorOption(defaultArticleState.fontColor);
	};

	const submitForm = () => {};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onClear={clearForm} onSubmit={submitForm}>
				<Select
					title={'Шрифт'}
					selected={selectedFontFamilyOption}
					options={fontFamilyOptions}
					onChange={onChangeSelectedFontFamily}
				/>
				<RadioGroup
					title={'Размер шрифта'}
					name={'Размер шрифта'}
					options={fontSizeOptions}
					selected={selectedFontSizeOption}
					onChange={onChangeSelectedFontSize}
				/>
				<Select
					title={'Цвет фона'}
					selected={selectedFontColorOption}
					options={fontColors}
					onChange={onChangeSelectedFontColor}
				/>
				<Separator />
				<Select
					title={'Цвет фона'}
					selected={selectedBackgroundColorOption}
					options={backgroundColors}
					onChange={onChangeSelectedBackgroundColor}
				/>
				<Select
					title={'Ширина контента'}
					selected={selectedContentWidthOption}
					options={contentWidthArr}
					onChange={onChangeSelectedContentWidth}
				/>
			</ArticleParamsForm>
			<Article fontFamily={selectedFontFamilyOption} />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
