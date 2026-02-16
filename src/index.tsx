import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
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
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
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
			<ArticleParamsForm
				selectedFontFamilyClass={defaultArticleState.fontFamilyOption}
				fontFamilyClasses={fontFamilyOptions}
				selectedFontSize={defaultArticleState.fontSizeOption}
				fontSizes={fontSizeOptions}
				selectedFontColor={defaultArticleState.fontColor}
				fontColors={fontColors}
				selectedBackgroundColor={defaultArticleState.backgroundColor}
				backgroundColors={backgroundColors}
				selectedContentWidth={defaultArticleState.contentWidth}
				contentWidths={contentWidthArr}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
