/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './editor.scss';
import './style.scss';
import { registerBlockType } from '../../api';
import LatestPostsBlock from './block';
import alignmentShortcuts from '../../alignment-shortcuts';

registerBlockType( 'core/latest-posts', {
	title: __( 'Latest Posts' ),

	description: __( 'Shows a list of your site\'s most recent posts.' ),

	icon: 'list-view',

	category: 'widgets',

	keywords: [ __( 'recent posts' ) ],

	supports: {
		html: false,
	},

	transforms: {
		to: alignmentShortcuts,
	},

	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( 'left' === align || 'right' === align || 'wide' === align || 'full' === align ) {
			return { 'data-align': align };
		}
	},

	edit: LatestPostsBlock,

	save() {
		return null;
	},
} );
