static const char *colorname[] = {
	/* 8 normal colors */
  "#282c34",
  "#e06c75",
  "#98c379",
  "#e5c07b",
  "#61afef",
  "#be5046",
  "#56b6c2",
  "#979eab",

	/* 8 bright colors */
  "#393e48",
  "#d19a66",
  "#56b6c2",
  "#e5c07b",
  "#61afef",
  "#be5046",
  "#56b6c2",
  "#abb2bf",

	[255] = 0,

	/* more colors can be added after 255 to use with DefaultXX */
	"#cccccc",
	"#555555",
	"#979eab", /* default foreground colour */
	"#282c34", /* default background colour */
};

/*
 * Default colors (colorname index)
 * foreground, background, cursor, reverse cursor
 */
unsigned int defaultfg = 258;
unsigned int defaultbg = 259;
unsigned int defaultcs = 256;
static unsigned int defaultrcs = 257;
