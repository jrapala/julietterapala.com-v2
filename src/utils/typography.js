import Typography from 'typography'

const typography = new Typography({
	googleFonts: [
		{
			name: 'Assistant',
			styles: ['400', '600', '700'],
		},
		{
			name: 'Poppins',
			styles: ['300', '400'],
		},
	],
	baseFontSize: '16px',
	baseLineHeight: 1.666,
	headerFontFamily: ['Assistant', 'sans-serif'],
	headerWeight: '700',
	bodyFontFamily: ['Poppins', 'serif'],
})

export default typography
