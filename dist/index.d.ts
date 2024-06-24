import React, { FC, ReactNode } from 'react';
import { Theme } from '@mui/material/styles';

interface MyButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    [key: string]: any;
}
declare const MyButton: FC<MyButtonProps>;

interface MyCardProps {
    children: ReactNode;
    actions?: ReactNode;
}
declare const Card: React.FC<MyCardProps>;

interface MyTextFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
}
declare const MyTextField: FC<MyTextFieldProps>;

var _VariantGroup = "#9747ff";
var borderRadius = {
	lg: "1px",
	max: "240px",
	md: "1px",
	sm: "1px",
	xl: "1px",
	xs: "1px"
};
var borderWidth = {
	bold: "2px",
	regular: "1px"
};
var color = {
	Accent: {
		Border: {
			Blue: "#a8cfff",
			Green: "#6ce5a2",
			Indigo: "#bbcaff",
			Lime: "#bed954",
			Orange: "#fdbe8d",
			Pink: "#ffb5ee",
			Purple: "#ebbaf9",
			Red: "#ffb9ba",
			Sky: "#78daeb",
			Teal: "#62e1ca",
			Violet: "#d2c3ff",
			Yellow: "#f3c95b"
		},
		Content: {
			Blue: "#3268c4",
			Green: "#3d8c4e",
			Indigo: "#4a58d1",
			Lime: "#6b8b1e",
			Orange: "#bd5904",
			Pink: "#bc2f86",
			Purple: "#b130b3",
			Red: "#c5312f",
			Sky: "#0f7a94",
			Teal: "#1e8878",
			Violet: "#794ed2",
			Yellow: "#ab7506"
		},
		Foreground: {
			Blue: "#eff5ff",
			Green: "#e2fbe8",
			Indigo: "#f3f5ff",
			Lime: "#f4f8e1",
			Orange: "#fff4ec",
			Pink: "#fff2fc",
			Purple: "#fbf3ff",
			Red: "#fff2f2",
			Sky: "#e2faff",
			Teal: "#dffbf3",
			Violet: "#f6f3ff",
			Yellow: "#fef5e2"
		}
	},
	Base: {
		Foreground: {
			Disable: "#fafafb",
			"Disable Overlay": "rgba(255, 255, 255, 0.53)",
			"Elevated-0": "#ffffff",
			"Elevated-4": "#ffffff",
			"Elevated-8": "#ffffff",
			"Elevated-16": "#ffffff",
			Ground: "#ffffff",
			"Ground Alt": "#fbfbfb",
			Hover: "#f5f5f5",
			Invert: "#000000",
			Moderate: "#ececec",
			Pressed: "#ececec",
			"Screen Overlay": "rgba(0, 0, 0, 0.25)",
			Subtle: "#f5f5f5",
			Transparent: "rgba(0, 0, 0, 0)",
			"Transparent Focused": "rgba(255, 255, 255, 0.01)"
		}
	},
	Beauty: {
		Border: {
			Default: "#fdc0ce",
			Strong: "#cc1266"
		},
		Content: {
			Default: "#cc1266",
			Hover: "#ac0054",
			Pressed: "#891645"
		},
		Foreground: {
			Default: "#cc1266",
			Hover: "#ac0054",
			"Muted Hover": "#fff0f3",
			"Muted Pressed": "#fbe6ea",
			Pressed: "#891645",
			Subtle: "#fff0f3",
			"Subtle Hover": "#fbe6ea",
			"Subtle Pressed": "#fedae2"
		}
	},
	Functional: {
		Border: {
			"Error": "#ffb9ba",
			"Error Strong": "#c5312f"
		},
		Content: {
			"Error": "#c5312f",
			"Error Hover": "#a3201a",
			"Error Pressed": "#881a10",
			Info: "#3268c4",
			Success: "#3d8c4e",
			Warning: "#ab7506"
		},
		Foreground: {
			"Error": "#c5312f",
			"Error Hover": "#a3201a",
			"Error Muted Hover": "#fff2f2",
			"Error Muted Pressed": "#ffe8e8",
			"Error Pressed": "#881a10",
			"Error Subtle": "#fff2f2",
			"Error Subtle Hover": "#ffe8e8",
			"Error Subtle Pressed": "#ffd3d4",
			Info: "#3268c4",
			"Info Subtle": "#eff5ff",
			Success: "#3d8c4e",
			"Success Subtle": "#e2fbe8",
			Warning: "#ab7506",
			"Warning Subtle": "#fef5e2"
		}
	},
	Lifestyle: {
		Border: {
			Default: "#b7ccff",
			Strong: "#3472c8"
		},
		Content: {
			Default: "#3472c8",
			Hover: "#24599f",
			Pressed: "#1c4984"
		},
		Foreground: {
			Default: "#3472c8",
			Hover: "#24599f",
			"Muted Hover": "#f1f4fb",
			"Muted Pressed": "#e6ebf9",
			Pressed: "#1c4984",
			Subtle: "#f1f4fb",
			"Subtle Hover": "#e6ebf9",
			"Subtle Pressed": "#d5e0fe"
		}
	},
	"on-Accent": {
		Border: {
			Default: "rgba(255, 255, 255, 0.4)"
		},
		Content: {
			High: "#ffffff",
			Low: "rgba(255, 255, 255, 0.53)",
			Medium: "rgba(255, 255, 255, 0.82)"
		}
	},
	"on-Base": {
		Border: {
			Default: "#d1d1d1",
			Disable: "#ececec"
		},
		Content: {
			Disable: "#e0e0e0",
			High: "#323232",
			Invert: "#ffffff",
			Low: "#bebebe",
			Medium: "#676767"
		}
	},
	"on-Beauty": {
		Border: {
			Default: "rgba(255, 255, 255, 0.4)"
		},
		Content: {
			High: "#ffffff",
			Low: "rgba(255, 255, 255, 0.53)",
			Medium: "rgba(255, 255, 255, 0.82)"
		}
	},
	"on-Functional": {
		Border: {
			Default: "rgba(255, 255, 255, 0.4)"
		},
		Content: {
			High: "#ffffff",
			Low: "rgba(255, 255, 255, 0.53)",
			Medium: "rgba(255, 255, 255, 0.82)"
		}
	},
	"on-Lifestyle": {
		Border: {
			Default: "rgba(255, 255, 255, 0.4)"
		},
		Content: {
			High: "#ffffff",
			Low: "rgba(255, 255, 255, 0.53)",
			Medium: "rgba(255, 255, 255, 0.82)"
		}
	},
	"on-Primary": {
		Border: {
			Default: "rgba(255, 255, 255, 0.4)"
		},
		Content: {
			High: "#ffffff",
			Low: "rgba(255, 255, 255, 0.53)",
			Medium: "rgba(255, 255, 255, 0.82)"
		}
	},
	"on-Secondary": {
		Border: {
			Default: "rgba(255, 255, 255, 0.4)"
		},
		Content: {
			High: "#ffffff",
			Low: "rgba(255, 255, 255, 0.53)",
			Medium: "rgba(255, 255, 255, 0.82)"
		}
	},
	"on-Static": {
		Border: {
			Default: "rgba(255, 255, 255, 0.4)"
		},
		Content: {
			Disable: "rgba(255, 255, 255, 0.33)",
			High: "#ffffff",
			Low: "rgba(255, 255, 255, 0.53)",
			Medium: "rgba(255, 255, 255, 0.82)"
		}
	},
	Primary: {
		Border: {
			Default: "#cdcdcd",
			Strong: "#000000"
		},
		Content: {
			Default: "#000000",
			Hover: "#555555",
			Pressed: "#434343"
		},
		Foreground: {
			Default: "#000000",
			Hover: "#333333",
			"Muted Hover": "#f3f3f3",
			"Muted Pressed": "#ebebeb",
			Pressed: "#222222",
			Subtle: "#f3f3f3",
			"Subtle Hover": "#ebebeb",
			"Subtle Pressed": "#dfdfdf"
		}
	},
	Secondary: {
		Border: {
			Default: "#cbcaf6",
			Strong: "#6065ae"
		},
		Content: {
			Default: "#6065ae",
			Hover: "#444e9c",
			Pressed: "#2e3c88"
		},
		Foreground: {
			Default: "#6065ae",
			Hover: "#444e9c",
			"Muted Hover": "#f6f5ff",
			"Muted Pressed": "#eae9ff",
			Pressed: "#2e3c88",
			Subtle: "#f6f5ff",
			"Subtle Hover": "#eae9ff",
			"Subtle Pressed": "#deddff"
		}
	},
	Social: {
		"Border-AppleOutline-Default": "#000000",
		"Border-KP-Default": "#0b56a4",
		"Content-AppleBlack-Default": "#ffffff",
		"Content-AppleWhite-Default": "#000000",
		"Content-Facebook-Default": "#ffffff",
		"Content-KP-Default": "#0b56a4",
		"Foreground-AppleBlack-Default": "#000000",
		"Foreground-AppleOutline-Default": "#ffffff",
		"Foreground-AppleWhite-Default": "#ffffff",
		"Foreground-Facebook-Default": "#1877f2",
		"Foreground-KP-Default": "#0b56a4"
	},
	Static: {
		Border: {
			Default: "rgba(255, 255, 255, 0.4)",
			Strong: "rgba(255, 255, 255, 0.65)"
		},
		Content: {
			Default: "#ffffff"
		},
		Foreground: {
			Disable: "rgba(255, 255, 255, 0.13)",
			Subtle: "rgba(255, 255, 255, 0.33)",
			"Subtle Hover": "rgba(255, 255, 255, 0.26)",
			"Subtle Pressed": "rgba(255, 255, 255, 0.2)"
		}
	}
};
var comp = {
	alert: {
		borderRadius: {
			"default": "1px"
		},
		padding: {
			"default": "16px"
		}
	},
	badge: {
		borderRadius: {
			"default": "0px"
		},
		gap: {
			content: {
				large: "8px",
				medium: "6px",
				small: "4px"
			}
		},
		padding: {
			horizontal: {
				large: "8px",
				medium: "6px",
				small: "4px"
			}
		},
		sem: {
			color: {
				"background-oos": "#888888",
				"background-privilege": "#fef5e2",
				"background-promotion": "#fff4ec",
				"background-scarcity": "#dffbf3",
				"background-social": "#eff5ff",
				"background-special": "#000000",
				"content-oos": "#ffffff",
				"content-privilege": "#ab7506",
				"content-promotion": "#bd5904",
				"content-scarcity": "#1e8878",
				"content-social": "#3268c4",
				"content-special": "#ffffff"
			}
		},
		size: {
			height: {
				large: "32px",
				medium: "24px",
				small: "20px"
			}
		}
	},
	btn: {
		borderRadius: {
			"default": "1px",
			link: "0px"
		},
		borderWidth: {
			"default": "1px",
			ghost: "0px",
			primary: "1px",
			secondary: "1px",
			tertiary: "0px"
		},
		color: {
			background: {
				"default-danger-hover": "#fff2f2",
				"default-danger-normal": "#FFFFFF",
				"default-danger-pressed": "#ffe8e8",
				"default-hover": "#f5f5f5",
				"default-normal": "#FFFFFF",
				"default-pressed": "#ececec",
				disable: "#fafafb",
				"ghost-danger-disable": "#00000000",
				"ghost-danger-hover": "#fff2f2",
				"ghost-danger-normal": "#00000000",
				"ghost-danger-press": "#ffe8e8",
				"ghost-disable": "#00000000",
				"ghost-hover": "#f5f5f5",
				"ghost-normal": "#00000000",
				"ghost-pressed": "#ececec",
				link: "#00000000",
				"primary-danger-hover": "#a3201a",
				"primary-danger-normal": "#c5312f",
				"primary-danger-pressed": "#881a10",
				"primary-hover": "#333333",
				"primary-normal": "#000000",
				"primary-pressed": "#222222",
				"secondary-danger-hover": "#ffe8e8",
				"secondary-danger-normal": "#fff2f2",
				"secondary-danger-pressed": "#ffd3d4",
				"secondary-hover": "#eae9ff",
				"secondary-normal": "#f6f5ff",
				"secondary-pressed": "#deddff",
				"tertiary-danger-hover": "#fff2f2",
				"tertiary-danger-normal": "#00000000",
				"tertiary-danger-pressed": "#ffe8e8",
				"tertiary-disable": "#00000000",
				"tertiary-hover": "#f6f5ff",
				"tertiary-normal": "#00000000",
				"tertiary-pressed": "#eae9ff"
			},
			border: {
				"default": "#d1d1d1",
				"default-hover": "#d1d1d1",
				"default-pressed": "#d1d1d1",
				disable: "#ececec",
				ghost: "#00000000",
				"ghost-disable": "#00000000",
				"ghost-hover": "#00000000",
				"ghost-pressed": "#00000000",
				primary: "#000000",
				"primary-hover": "#000000",
				"primary-pressed": "#000000",
				secondary: "#cbcaf6",
				"secondary-hover": "#cbcaf6",
				"secondary-pressed": "#cbcaf6",
				tertiary: "#00000000",
				"tertiary-disable": "#00000000",
				"tertiary-hover": "#00000000",
				"tertiary-pressed": "#00000000"
			},
			content: {
				"default": "#323232",
				disable: "#e0e0e0",
				ghost: "#323232",
				"link-hover": "#444e9c",
				"link-normal": "#6065ae",
				"link-pressed": "#2e3c88",
				"primary-hover": "#ffffff",
				"primary-normal": "#ffffff",
				"primary-pressed": "#ffffff",
				"secondary-hover": "#444e9c",
				"secondary-normal": "#6065ae",
				"secondary-pressed": "#2e3c88",
				tertiary: "#6065ae"
			}
		},
		content: {
			icon: {
				large: "24px",
				medium: "20px",
				small: "16px"
			}
		},
		gap: {
			content: "8px"
		},
		icononly: {
			padding: {
				horizontal: {
					large: "12px",
					medium: "10px",
					small: "8px"
				},
				vertical: {
					large: "12px",
					medium: "10px",
					small: "8px"
				}
			},
			size: {
				large: "48px",
				medium: "40px",
				small: "32px"
			}
		},
		minHeight: {
			large: "48px",
			medium: "40px",
			small: "32px"
		},
		padding: {
			horizontal: {
				large: "16px",
				medium: "12px",
				small: "8px"
			},
			vertical: {
				large: "12px",
				medium: "9px",
				small: "7px"
			}
		}
	},
	card: {
		color: {
			background: "#ffffff"
		},
		product: {
			basic: {
				horizontal: "8px"
			},
			borderless: {
				horizontal: "0px"
			},
			mini: {
				horizontal: "8px"
			},
			padding: {
				vertical: "8px"
			}
		}
	},
	carousel: {
		control: {
			borderWidth: "1px",
			color: {
				background: "#f5f5f5",
				border: "#d1d1d1"
			}
		}
	},
	checkbox: {
		borderRadius: {
			"default": "1px"
		},
		borderWidth: {
			active: "2px",
			normal: "1px"
		},
		color: {
			background: {
				"active-disable": "#fafafb",
				"active-hover": "#f5f5f5",
				"active-normal": "#FFFFFF",
				"active-pressed": "#ececec",
				"inactive-disable": "#fafafb",
				"inactive-hover": "#f5f5f5",
				"inactive-normal": "#FFFFFF",
				"inactive-pressed": "#ececec"
			},
			border: {
				"active-disable": "#ececec",
				"active-hover": "#000000",
				"active-normal": "#000000",
				"active-pressed": "#000000",
				"inactive-disable": "#ececec",
				"inactive-hover": "#d1d1d1",
				"inactive-normal": "#d1d1d1",
				"inactive-pressed": "#d1d1d1"
			},
			content: {
				disable: "#e0e0e0",
				normal: "#323232"
			},
			mark: {
				"active-normal": "#000000",
				disable: "#e0e0e0"
			}
		}
	},
	input: {
		assist: {
			padding: {
				bottom: "4px",
				left: "12px",
				right: "0px",
				top: "2px"
			}
		},
		background: {
			"default": "#f5f5f5",
			hover: "#ececec"
		},
		basic: {
			height: {
				large: "48px",
				medium: "40px",
				small: "32px"
			},
			padding: {
				horizontal: {
					large: "16px",
					medium: "12px",
					small: "8px"
				}
			}
		},
		borderRadius: {
			bottom: "0px",
			top: "1px"
		},
		borderWidth: {
			"default": "1px",
			focus: "2px"
		},
		inline: {
			height: "48px",
			padding: {
				horizontal: "12px"
			}
		}
	},
	menu: {
		borderRadius: {
			container: "1px",
			item: "1px"
		},
		gap: {
			content: "8px"
		},
		padding: {
			container: "4px",
			content: "8px"
		}
	},
	radio: {
		borderRadius: {
			"default": "1px"
		},
		borderWidth: {
			active: "2px",
			normal: "1px"
		},
		color: {
			background: {
				"active-disable": "#fafafb",
				"active-hover": "#f5f5f5",
				"active-normal": "#FFFFFF",
				"active-pressed": "#ececec",
				"inactive-disable": "#fafafb",
				"inactive-hover": "#f5f5f5",
				"inactive-normal": "#FFFFFF",
				"inactive-pressed": "#ececec"
			},
			border: {
				"active-disable": "#ececec",
				"active-hover": "#000000",
				"active-normal": "#000000",
				"active-pressed": "#000000",
				"inactive-disable": "#ececec",
				"inactive-hover": "#d1d1d1",
				"inactive-normal": "#d1d1d1",
				"inactive-pressed": "#d1d1d1"
			},
			content: {
				disable: "#e0e0e0",
				normal: "#323232"
			},
			mark: {
				"active-normal": "#000000",
				disable: "#e0e0e0"
			}
		}
	},
	"switch": {
		borderRadius: {
			"default": "1px",
			knob: "1px"
		},
		borderWidth: {
			"default": "1px"
		},
		color: {
			bg: {
				"active-disable": "#f3f3f3",
				"active-normal": "#000000",
				"inactive-disable": "#fafafb",
				"inactive-normal": "#f5f5f5"
			},
			border: {
				"active-disable": "#ececec",
				"active-normal": "#000000",
				"inactive-disable": "#ececec",
				"inactive-normal": "#d1d1d1"
			},
			content: {
				"active-disable": "#323232",
				"active-normal": "#323232",
				"inactive-disable": "#323232",
				"inactive-normal": "#323232"
			},
			knob: {
				"active-disable": "#e0e0e0",
				"active-normal": "#FFFFFF",
				"inactive-disable": "#e0e0e0",
				"inactive-normal": "#FFFFFF"
			}
		}
	},
	tag: {
		borderRadius: {
			"default": "1px"
		}
	}
};
var opacity = {
	overlay: {
		"disable-dark": 0.47,
		"disable-light": 0.53,
		screen: 0.25
	},
	"static": {
		border: 0.4,
		"border-strong": 0.65,
		disable: 0.13,
		hover: 0.26,
		pressed: 0.2,
		subtle: 0.33
	}
};
var padding = {
	lg: "12px",
	md: "8px",
	none: "0px",
	sm: "6px",
	xl: "16px",
	xs: "4px",
	xxl: "20px",
	xxs: "2px"
};
var palette = {
	Blue: {
		"100": "#c5dffe",
		"200": "#a8cfff",
		"300": "#85b0f4",
		"400": "#5c8bdc",
		"500": "#3268c4",
		"600": "#2451b0",
		"700": "#234195",
		"800": "#253378",
		"900": "#212b61",
		"950": "#1e2852",
		"025": "#eff5ff",
		"050": "#e0eeff"
	},
	Bruno: {
		"100": "#d5e0fe",
		"200": "#b7ccff",
		"300": "#8ab1ff",
		"400": "#5c95f1",
		"500": "#3472c8",
		"600": "#24599f",
		"700": "#1c4984",
		"800": "#153a6a",
		"900": "#122e56",
		"950": "#102749",
		"025": "#f1f4fb",
		"050": "#e6ebf9"
	},
	Cindy: {
		"100": "#fedae2",
		"200": "#fdc0ce",
		"300": "#fa93af",
		"400": "#eb5086",
		"500": "#cc1266",
		"600": "#ac0054",
		"700": "#891645",
		"800": "#6a1937",
		"900": "#541d2f",
		"950": "#401c26",
		"025": "#fff0f3",
		"050": "#fbe6ea"
	},
	Green: {
		"100": "#9af2be",
		"200": "#6ce5a2",
		"300": "#52cc85",
		"400": "#46aa67",
		"500": "#3d8c4e",
		"600": "#35743f",
		"700": "#326032",
		"800": "#2b4f2a",
		"900": "#204024",
		"950": "#15341c",
		"025": "#e2fbe8",
		"050": "#cbf9d9"
	},
	Indigo: {
		"100": "#d3dcff",
		"200": "#bbcaff",
		"300": "#97aafe",
		"400": "#6c7fe9",
		"500": "#4a58d1",
		"600": "#4344bc",
		"700": "#3c36a2",
		"800": "#362d8a",
		"900": "#33276c",
		"950": "#312456",
		"025": "#f3f5ff",
		"050": "#e6ebfe"
	},
	Lazy: {
		"100": "#c2e3ee",
		"200": "#92d9ef",
		"300": "#61c0db",
		"400": "#3aa2bd",
		"500": "#247e95",
		"600": "#1c6375",
		"700": "#174d5b",
		"800": "#143e49",
		"900": "#163139",
		"950": "#16252a",
		"025": "#edf5f8",
		"050": "#dbeff5"
	},
	Lila: {
		"100": "#fedadf",
		"200": "#ffbcc6",
		"300": "#fb9cac",
		"400": "#e5758c",
		"500": "#c54465",
		"600": "#a6284e",
		"700": "#86143a",
		"800": "#69122d",
		"900": "#571226",
		"950": "#481321",
		"025": "#ffeef0",
		"050": "#fde5e8"
	},
	Lime: {
		"100": "#d8ea88",
		"200": "#bed954",
		"300": "#a2c132",
		"400": "#83a41f",
		"500": "#6b8b1e",
		"600": "#54751b",
		"700": "#436119",
		"800": "#354e13",
		"900": "#2c3f0f",
		"950": "#24320a",
		"025": "#f4f8e1",
		"050": "#eaf3bb"
	},
	"Mulled Wine": {
		"100": "#b7b7c4",
		"200": "#9c9dae",
		"300": "#7d7f94",
		"400": "#5d5e76",
		"500": "#4c4e66",
		"600": "#3d3f56",
		"700": "#2f3046",
		"800": "#222337",
		"900": "#171828",
		"999": "#0d0e19",
		"000": "#ffffff",
		"010": "#fafafb",
		"020": "#f3f3f6",
		"030": "#eaeaee",
		"040": "#dddde4",
		"050": "#cccdd6"
	},
	Neutral: {
		"100": "#bebebe",
		"200": "#a5a5a5",
		"300": "#888888",
		"400": "#676767",
		"500": "#555555",
		"600": "#434343",
		"700": "#323232",
		"800": "#212121",
		"900": "#101010",
		"999": "#000000",
		"000": "#ffffff",
		"010": "#fbfbfb",
		"020": "#f5f5f5",
		"030": "#ececec",
		"040": "#e0e0e0",
		"050": "#d1d1d1"
	},
	Nitro: {
		"100": "#deddff",
		"200": "#cbcaf6",
		"300": "#adade2",
		"400": "#8a8bc8",
		"500": "#6065ae",
		"600": "#444e9c",
		"700": "#2e3c88",
		"800": "#27326f",
		"900": "#252a57",
		"950": "#232442",
		"025": "#f6f5ff",
		"050": "#eae9ff"
	},
	Orange: {
		"100": "#fed7b8",
		"200": "#fdbe8d",
		"300": "#f5984c",
		"400": "#de7823",
		"500": "#bd5904",
		"600": "#a24604",
		"700": "#863508",
		"800": "#712b0e",
		"900": "#5f2611",
		"950": "#4e1e0b",
		"025": "#fff4ec",
		"050": "#fde9da"
	},
	Pink: {
		"100": "#ffd0f5",
		"200": "#ffb5ee",
		"300": "#f588d6",
		"400": "#de56af",
		"500": "#bc2f86",
		"600": "#a01868",
		"700": "#881354",
		"800": "#701445",
		"900": "#5b1538",
		"950": "#4d192e",
		"025": "#fff2fc",
		"050": "#ffe6f9"
	},
	Poppy: {
		"100": "#feccd1",
		"200": "#ffb9c2",
		"300": "#ff91a3",
		"400": "#f36281",
		"500": "#d43863",
		"600": "#b11b4b",
		"700": "#8b163a",
		"800": "#6a112c",
		"900": "#571124",
		"950": "#49111f",
		"025": "#fff0f2",
		"050": "#ffdfe2"
	},
	Prima: {
		"100": "#f9e16f",
		"200": "#e9d049",
		"300": "#d1ba37",
		"400": "#b8a434",
		"500": "#9b8a31",
		"600": "#7b6d29",
		"700": "#615728",
		"800": "#473f1a",
		"900": "#383216",
		"950": "#2f2b17",
		"025": "#f8f2dd",
		"050": "#ffedab"
	},
	Primary: {
		"100": "#dfdfdf",
		"200": "#cdcdcd",
		"300": "#b2b2b2",
		"400": "#8c8c8c",
		"500": "#6d6d6d",
		"600": "#555555",
		"700": "#434343",
		"800": "#333333",
		"900": "#222222",
		"950": "#000000",
		"025": "#f3f3f3",
		"050": "#ebebeb"
	},
	Purple: {
		"100": "#f0d3fc",
		"200": "#ebbaf9",
		"300": "#dd94ea",
		"400": "#c962d4",
		"500": "#b130b3",
		"600": "#960f97",
		"700": "#810c80",
		"800": "#6b0e69",
		"900": "#581355",
		"950": "#491945",
		"025": "#fbf3ff",
		"050": "#f8e8ff"
	},
	Red: {
		"100": "#ffd3d4",
		"200": "#ffb9ba",
		"300": "#fc8e8e",
		"400": "#ef5f5e",
		"500": "#c5312f",
		"600": "#a3201a",
		"700": "#881a10",
		"800": "#6f160d",
		"900": "#5e170f",
		"950": "#4d1513",
		"025": "#fff2f2",
		"050": "#ffe8e8"
	},
	Secondary: {
		"100": "#deddff",
		"200": "#cbcaf6",
		"300": "#adade2",
		"400": "#8a8bc8",
		"500": "#6065ae",
		"600": "#444e9c",
		"700": "#2e3c88",
		"800": "#27326f",
		"900": "#252a57",
		"950": "#232442",
		"025": "#f6f5ff",
		"050": "#eae9ff"
	},
	Sky: {
		"100": "#a8e9f4",
		"200": "#78daeb",
		"300": "#4dbcd3",
		"400": "#2d9bb3",
		"500": "#0f7a94",
		"600": "#14657f",
		"700": "#1e566f",
		"800": "#1f475d",
		"900": "#193a4d",
		"950": "#143041",
		"025": "#e2faff",
		"050": "#ccf5fc"
	},
	Snap: {
		"100": "#c0e7ec",
		"200": "#8edee9",
		"300": "#7ac2cc",
		"400": "#629fa7",
		"500": "#4a7c82",
		"600": "#376166",
		"700": "#2c4f53",
		"800": "#254246",
		"900": "#1f3639",
		"950": "#1a2c2f",
		"025": "#e8f6f8",
		"050": "#d5f0f4"
	},
	Social: {
		Apple: "#000000",
		Facebook: "#1877f2",
		KingPower: "#0b56A4"
	},
	Teal: {
		"100": "#9cf0de",
		"200": "#62e1ca",
		"300": "#3fc6af",
		"400": "#2aa694",
		"500": "#1e8878",
		"600": "#1d6e61",
		"700": "#1c5950",
		"800": "#1c4841",
		"900": "#1a3c38",
		"950": "#14322f",
		"025": "#dffbf3",
		"050": "#c5f9ec"
	},
	Violet: {
		"100": "#e2d8ff",
		"200": "#d2c3ff",
		"300": "#b7a0f8",
		"400": "#9275e8",
		"500": "#794ed2",
		"600": "#6937be",
		"700": "#6026a4",
		"800": "#542087",
		"900": "#46216a",
		"950": "#392151",
		"025": "#f6f3ff",
		"050": "#f0eaff"
	},
	Wei: {
		"100": "#e9dcf9",
		"200": "#d9c5f4",
		"300": "#c2a4ec",
		"400": "#9f79d8",
		"500": "#7f55ca",
		"600": "#6639be",
		"700": "#5229a7",
		"800": "#412084",
		"900": "#35196d",
		"950": "#2c1658",
		"025": "#f6f3f9",
		"050": "#eee9f5"
	},
	Yellow: {
		"100": "#fbde93",
		"200": "#f3c95b",
		"300": "#ddac29",
		"400": "#c38f04",
		"500": "#ab7506",
		"600": "#936111",
		"700": "#7d4f11",
		"800": "#663e0f",
		"900": "#52310d",
		"950": "#422706",
		"025": "#fef5e2",
		"050": "#ffedc1"
	}
};
var Shadow = {
	Below: {
		md: "0px 8px 24px -4px #0000001f, 0px 0px 1px 0px #0000001f",
		sm: "0px 4px 16px -4px #00000014, 0px 0px 1px 0px #0000001f",
		xl: "0px 16px 32px -4px #00000029, 0px 0px 1px 0px #00000029",
		xs: "0px 2px 4px -4px #0000000f, 0px 0px 1px 0px #0000001f"
	}
};
var sizing = {
	compLG: "48px",
	compMD: "40px",
	compSM: "32px",
	compXL: "56px",
	compXS: "24px",
	compXXS: "20px"
};
var State = {
	Focused: {
		Default: "0px 0px 0px 2px #ffffffbf, 0px 0px 0px 4px #000000",
		"Error": "0px 0px 0px 2px #ffffffbf, 0px 0px 0px 4px #ffb9ba",
		Primary: "0px 0px 0px 2px #ffffffbf, 0px 0px 0px 4px #cdcdcd"
	}
};
var typography = {
	disp: {
		"Display 1": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "58px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "82px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "58px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "82px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Display 2": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "52px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "72px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "52px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "72px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Display 3": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "46px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "64px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "46px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "64px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Display 4": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "41px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "58px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "41px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "58px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		}
	},
	Extra: {
		Button: {
			large: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "16px",
				fontWeight: 700,
				letterSpacing: "2%",
				lineHeight: "24px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "uppercase"
			},
			medium: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "14px",
				fontWeight: 700,
				letterSpacing: "2%",
				lineHeight: "22px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "uppercase"
			},
			small: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "12px",
				fontWeight: 700,
				letterSpacing: "2%",
				lineHeight: "18px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "uppercase"
			}
		},
		Price: {
			large: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "16px",
				fontWeight: 700,
				letterSpacing: "0px",
				lineHeight: "20px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			"large-strike": {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "16px",
				fontWeight: 700,
				letterSpacing: "0px",
				lineHeight: "20px",
				paragraphSpacing: "0px",
				textDecoration: "line-through",
				textTransform: "none"
			},
			medium: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "14px",
				fontWeight: 700,
				letterSpacing: "0px",
				lineHeight: "16px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			"medium-strike": {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "14px",
				fontWeight: 700,
				letterSpacing: "0px",
				lineHeight: "16px",
				paragraphSpacing: "0px",
				textDecoration: "line-through",
				textTransform: "none"
			},
			small: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "12px",
				fontWeight: 700,
				letterSpacing: "0px",
				lineHeight: "14px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			"small-strike": {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "12px",
				fontWeight: 700,
				letterSpacing: "0px",
				lineHeight: "14px",
				paragraphSpacing: "0px",
				textDecoration: "line-through",
				textTransform: "none"
			}
		}
	},
	head: {
		"Headline 1": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "32px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "52px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "32px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "52px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Headline 2": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "29px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "46px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "29px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "46px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Headline 3": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "26px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "42px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "26px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "42px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Headline 4": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "23px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "36px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "23px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "36px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Headline 5": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "20px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "32px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "20px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "32px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		Overline: {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "12px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "20px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "12px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "20px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Title 1": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "18px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "28px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "18px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "28px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Title 2": {
			normal: {
				fontFamily: "FIRSTER Headline Regular",
				fontSize: "16px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "26px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "FIRSTER Headline Bold",
				fontSize: "16px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "26px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		}
	},
	text: {
		"Body 1": {
			normal: {
				fontFamily: "King Power Text Regular",
				fontSize: "16px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "24px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "King Power Text Bold",
				fontSize: "16px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "24px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		"Body 2": {
			normal: {
				fontFamily: "King Power Text Regular",
				fontSize: "14px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "22px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "King Power Text Bold",
				fontSize: "14px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "22px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		Caption: {
			normal: {
				fontFamily: "King Power Text Regular",
				fontSize: "12px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "18px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "King Power Text Bold",
				fontSize: "12px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "18px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		},
		Tiny: {
			normal: {
				fontFamily: "King Power Text Regular",
				fontSize: "9px",
				fontWeight: 400,
				letterSpacing: "0%",
				lineHeight: "14px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			},
			strong: {
				fontFamily: "King Power Text Bold",
				fontSize: "9px",
				fontWeight: 700,
				letterSpacing: "0%",
				lineHeight: "14px",
				paragraphSpacing: "0px",
				textDecoration: "none",
				textTransform: "none"
			}
		}
	}
};
var lightThemeJson = {
	_VariantGroup: _VariantGroup,
	borderRadius: borderRadius,
	borderWidth: borderWidth,
	color: color,
	comp: comp,
	opacity: opacity,
	padding: padding,
	palette: palette,
	Shadow: Shadow,
	sizing: sizing,
	State: State,
	typography: typography
};

type DesignThemeTypes = Partial<typeof lightThemeJson>;
declare module '@mui/material/styles' {
    interface Theme extends DesignThemeTypes {
        borderRadius: {
            lg: string;
            max: string;
            md: string;
            sm: string;
            xl: string;
            xs: string;
        };
    }
    interface ThemeOptions extends DesignThemeTypes {
        borderRadius?: {
            lg?: string;
            max?: string;
            md?: string;
            sm?: string;
            xl?: string;
            xs?: string;
        };
    }
}
interface ThemeContextType {
    toggleTheme: () => void;
    setTheme: (themeName: 'light' | 'dark') => void;
    theme: Theme;
    themeName: string;
}
declare const useTheme: () => ThemeContextType;
interface ThemeProviderProps {
    children: ReactNode;
}
declare const ThemeProvider: React.FC<ThemeProviderProps>;

export { MyButton as Button, Card, MyTextField as TextField, ThemeProvider, ThemeProvider as default, useTheme };
