import Typography from 'typography'

const typography = new Typography({
	googleFonts: [
		{
			name: 'Source Serif Pro',
			styles: ['400', '600', '700'],
		},
		{
			name: 'Merriweather',
			styles: ['400', '600', '700'],
		},
	],
	baseFontSize: '21px',
	baseLineHeight: 1.666,
	headerFontFamily: ['Merriweather', 'sans-serif'],
	headerWeight: '600',
	bodyFontFamily: ['Source Serif Pro', 'serif'],
})

export default typography
