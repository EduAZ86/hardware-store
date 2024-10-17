export type TColors =
    | 'transparent'
    | 'primary'
    | 'secondary'
    | 'background'
    | 'acent'
    | 'text'
    | 'error';

export type TDimension =
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '12'
    | '16'
    | '24'
    | '32'
    | '40'
    | '48'
    | '56'
    | '64'
    | '96'
    | 'auto'
    | 'screen'
    | 'full'
    | 'min-content'
    | 'max-content'
    | 'fit'
    | '1/2'
    | '1/3'
    | '2/3'
    | '1/4'
    | '3/4'
    | '3/5'
    | '1/6'
    | '5/6'
    | '11/12';

type PrefixW<T extends string> = `w-${T}`;

type PrefixH<T extends string> = `h-${T}`;

export type TWidth = PrefixW<TDimension>;

export type THeight = PrefixH<TDimension>;

type TSpace =
    | '0'
    | '1'
    | '2'
    | '4'
    | '6'
    | 'x-0'
    | 'x-1'
    | 'x-2'
    | 'x-4'
    | 'y-6'
    | 'y-0'
    | 'y-1'
    | 'y-2'
    | 'y-4'
    | 'y-6'
    | 'l-0'
    | 'l-1'
    | 'l-2'
    | 'l-4'
    | 'l-6'
    | 'r-0'
    | 'r-1'
    | 'r-2'
    | 'r-4'
    | 'r-6'
    | 't-0'
    | 't-1'
    | 't-2'
    | 't-4'
    | 't-6'
    | 'b-0'
    | 'b-1'
    | 'b-2'
    | 'b-4'
    | 'b-6';

type PrefixP<T extends string> = `p-${T}`;
type PrefixM<T extends string> = `m-${T}`;
type PrefixG<T extends string> = `gap-${T}`;

export type TPadding = PrefixP<TSpace>;
export type TMargin = PrefixM<TSpace>;
export type TGap = PrefixG<TSpace>;



export type TJustify =
    | 'justify-center'
    | 'justify-start'
    | 'justify-end'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly';

export type TAlign =
    | 'items-center'
    | 'items-start'
    | 'items-end'
    | 'items-baseline'
    | 'items-stretch';

export type TOverflow =
    | 'overflow-auto'
    | 'overflow-hidden'
    | 'overflow-clip'
    | 'overflow-visible'
    | 'overflow-scroll'
    | 'overflow-x-auto'
    | 'overflow-y-auto'
    | 'overflow-x-hidden'
    | 'overflow-x'
    | 'overflow-y-hidden';

export type TBorder =
    | 'border-solid'
    | 'border-none';

export type TBorderWidth =
    | 'border-2'
    | 'border-4'
    | 'border-8'
    | 'border-0';

export type TBorderColor =
    | 'border-primary'
    | 'border-secondary'
    | 'border-background'
    | 'border-acent'
    | 'border-complementary';

export type TCursor =
    | 'cursor-auto'
    | 'cursor-pointer'
    | 'cursor-wait'
    | 'cursor-text'
    | 'cursor-move';

export type TPosition =
    | 'absolute'
    | 'relative'
    | 'fixed';

export type TDirection =
    | 'flex-row'
    | 'flex-col'
    | 'flex-row-reverse'
    | 'flex-col-reverse';

export type TFontSize =
    | 'text-8xl'
    | 'text-6xl'
    | 'text-4xl'
    | 'text-2xl'
    | 'text-xl'
    | 'text-base'
    | 'text-sm'
    | 'text-xs';

export type TFontWeight =
    | 'font-extralight'
    | 'font-light'
    | 'font-normal'
    | 'font-semibold'
    | 'font-extrabold';

export type TTextAlign =
    | 'text-left'
    | 'text-center'
    | 'text-right'
    | 'text-justify';

export type TLetterSpacing =
    | 'tracking-tighter'
    | 'tracking-normal'
    | 'tracking-wide'
    | 'tracking-widest';

export type TTextVerticalAlign =
    | 'align-top'
    | 'align-middle'
    | 'align-bottom';


export type TTextDecoration =
    | 'underline'
    | 'overline'
    | 'line-through'
    | 'no-underline';

export type TOpacity =
    | 'opacity-0'
    | 'opacity-25'
    | 'opacity-50'
    | 'opacity-75'
    | 'opacity-100';

export type TZIndex =
    | 'z-0'
    | 'z-10'
    | 'z-20'
    | 'z-30'
    | 'z-40'
    | 'z-50'
    | 'z-auto';

export type TDisplay =
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'grid'
    | 'table'
    | 'table-row'
    | 'table-cell'
    | 'hidden';

type Rounded =
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'full'
    | `t-none` | `t-sm` | `t-md` | `t-lg` | `t-xl` | `t-2xl` | `t-3xl` | `t-full`
    | `r-none` | `r-sm` | `r-md` | `r-lg` | `r-xl` | `r-2xl` | `r-3xl` | `r-full`
    | `b-none` | `b-sm` | `b-md` | `b-lg` | `b-xl` | `b-2xl` | `b-3xl` | `b-full`
    | `l-none` | `l-sm` | `l-md` | `l-lg` | `l-xl` | `l-2xl` | `l-3xl` | `l-full`
    | `tl-none` | `tl-sm` | `tl-md` | `tl-lg` | `tl-xl` | `tl-2xl` | `tl-3xl` | `tl-full`
    | `tr-none` | `tr-sm` | `tr-md` | `tr-lg` | `tr-xl` | `tr-2xl` | `tr-3xl` | `tr-full`
    | `br-none` | `br-sm` | `br-md` | `br-lg` | `br-xl` | `br-2xl` | `br-3xl` | `br-full`
    | `bl-none` | `bl-sm` | `bl-md` | `bl-lg` | `bl-xl` | `bl-2xl` | `bl-3xl` | `bl-full`;

type PrefixR<T extends string> = `rounded-${T}`;

export type TRounded = PrefixR<Rounded>;

export type TBlur =
    | "blur-none"
    | "blur-sm"
    | "blur"
    | "blur-md"
    | "blur-xl"
    | "blur-2xl"
    | "blur-3xl";

export type TBrightness =
    | "brightness-0"
    | "brightness-50"
    | "brightness-75"
    | "brightness-100"
    | "brightness-150"
    | "brightness-200";

export type TContrast =
    | "contrast-0"
    | "contrast-50"
    | "contrast-75"
    | "contrast-100"
    | "contrast-150";

export type TDropDown =
    | "drop-shadow-sm"
    | "drop-shadow"
    | "drop-shadow-md"
    | "drop-shadow-lg"
    | "drop-shadow-xl"
    | "drop-shadow-2xl";


export type TBackdropBlur =
    | "backdrop-blur-none"
    | "backdrop-blur-sm"
    | "backdrop-blur"
    | "backdrop-blur-md"
    | "backdrop-blur-lg"
    | "backdrop-blur-xl"
    | "backdrop-blur-2xl"
    | "backdrop-blur-3xl";

export type TObjectFit =
    | "object-contain"
    | "object-cover"
    | "object-fill"
    | "object-none"
    | "object-scale-down";

export type TBackgroundGradient =
    | "bg-gradient-to-t"
    | "bg-gradient-to-tr"
    | "bg-gradient-to-r"
    | "bg-gradient-to-br"
    | "bg-gradient-to-b"
    | "bg-gradient-to-bl"
    | "bg-gradient-to-l"
    | "bg-gradient-to-tl";

export type TScale =
    | "scale-0	"
    | "scale-x-0"
    | "scale-y-0"
    | "scale-50"
    | "scale-x-50"
    | "scale-y-50"
    | "scale-75"
    | "scale-x-75"
    | "scale-y-75"
    | "scale-90"
    | "scale-x-90"
    | "scale-y-90"
    | "scale-95"
    | "scale-x-95"
    | "scale-y-95"
    | "scale-100"
    | "scale-x-100"
    | "scale-y-100"
    | "scale-105"
    | "scale-x-105"
    | "scale-y-105"
    | "scale-110"
    | "scale-x-110"
    | "scale-y-110"
    | "scale-125"
    | "scale-x-125"
    | "scale-y-125"
    | "scale-150"
    | "scale-x-150"
    | "scale-y-150";