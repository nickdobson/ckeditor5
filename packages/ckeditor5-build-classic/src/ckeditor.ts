/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import {
	Bold,
	Code,
	Italic,
	Strikethrough,
	Subscript,
	Superscript,
	Underline,
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading, Title } from '@ckeditor/ckeditor5-heading';
import {
	AutoImage,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	PictureEditing,
} from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link, AutoLink, LinkImage } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed, MediaEmbedToolbar } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import {
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
} from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import {
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
} from '@ckeditor/ckeditor5-special-characters';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import {
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
} from '@ckeditor/ckeditor5-font';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Essentials,
		UploadAdapter,
		Alignment,
		Autoformat,
		AutoImage,
		AutoLink,
		Bold,
		Italic,
		BlockQuote,
		CKBox,
		CKFinder,
		CloudServices,
		Code,
		CodeBlock,
		EasyImage,
		ExportPdf,
		ExportWord,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		Heading,
		Highlight,
		HorizontalLine,
		HtmlEmbed,
		Image,
		ImageCaption,
		ImageInsert,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Link,
		LinkImage,
		List,
		ListProperties,
		MediaEmbed,
		MediaEmbedToolbar,
		Mention,
		PageBreak,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		RemoveFormat,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersEssentials,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Strikethrough,
		Subscript,
		Superscript,
		Table,
		TableCellProperties,
		TableProperties,
		TableToolbar,
		TextTransformation,
		Title,
		TodoList,
		Underline,
		WordCount,
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'heading',
				'|',
				'alignment',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'removeFormat',
				'|',
				'link',
				'numberedList',
				'bulletedList',
				'blockQuote',
				'code',
				'codeBlock',
				'|',
				'horizontalLine',
				'imageUpload',
				'insertTable',
				'specialCharacters',
				'|',
				'fontBackgroundColor',
				'fontColor',
				'fontSize',
				'fontFamily',
				'|',
				'exportWord',
				'exportPdf',
			],
		},
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative',
			],
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties',
				'tableProperties',
			],
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en',
	};
}
