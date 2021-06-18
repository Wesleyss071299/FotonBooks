export const dark = {
    background: '#22211f',
    colorInput: '#828284',
    text: '#FFF',
    descriptionColor: '#FFF'
};
export const light = {
    background: '#F2F2F2',
    colorInput: '#FDFCFC',
    text: '#000',
    descriptionColor: 'rgba(49, 49, 49, 0.6)'
};

type Theme = {
    background: typeof dark.background | typeof light.background;
    text: typeof dark.text | typeof light.text;
    colorInput: typeof dark.colorInput | typeof light.colorInput;
    descriptionColor: typeof dark.descriptionColor | typeof light.descriptionColor;
};
  
export interface CustomThemeProps {
    theme?: Theme;
}