/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading, Title } from '@ckeditor/ckeditor5-heading';
import { AutoImage, Image, ImageCaption, ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link, AutoLink, LinkImage } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed, MediaEmbedToolbar } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableCellProperties, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText } from '@ckeditor/ckeditor5-special-characters';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof TextTransformation | typeof Essentials | typeof UploadAdapter | typeof Paragraph | typeof Heading | typeof Title | typeof Autoformat | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof CloudServices | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof CKBox | typeof CKFinder | typeof EasyImage | typeof Indent | typeof IndentBlock | typeof AutoLink | typeof Link | typeof LinkImage | typeof List | typeof ListProperties | typeof TodoList | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof PasteFromOffice | typeof Table | typeof TableCellProperties | typeof TableProperties | typeof TableToolbar | typeof Alignment | typeof CodeBlock | typeof SpecialCharacters | typeof SpecialCharactersText | typeof SpecialCharactersArrows | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof WordCount | typeof RemoveFormat | typeof PageBreak | typeof Mention | typeof HtmlEmbed | typeof HorizontalLine | typeof Highlight | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof ExportPdf | typeof ExportWord | typeof PictureEditing)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
    };
}
