import GridItem from './GridItem';

export default {
  title: 'Grid/Grid Item',
  component: GridItem,
  argTypes: {
    subGrid: {
      description: 'Transforms the Grid Item into a sub grid',
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: 'Text, HTML or JSX that will be inside the Grid Item.',
      control: {
        type: 'text',
      },
    },
    smPhone: {
      description: 'Grid config for small phone viewport.',
      control: {
        type: 'object',
        disable: true,
      },
    },
    phone: {
      description: 'Grid config for phone viewport.',
      control: {
        type: 'object',
        disable: true,
      },
    },
    tablet: {
      description: 'Grid config for tablet viewport.',
      control: {
        type: 'object',
        disable: true,
      },
    },
    tabletHz: {
      description: 'Grid config for tablet landscape viewport.',
      control: {
        type: 'object',
        disable: true,
      },
    },
    smDesktop: {
      description: 'Grid config for small desktop viewport.',
      control: {
        type: 'object',
        disable: true,
      },
    },
    desktop: {
      description: 'Grid config for desktop viewport.',
      control: {
        type: 'object',
        disable: true,
      },
    },
    lgDesktop: {
      description: 'Grid config for large desktop viewport.',
      control: {
        type: 'object',
        disable: true,
      },
    },
  },
};

const Template = ({ children }) => <GridItem>{children}</GridItem>;

export const gridItem = Template.bind({});
gridItem.args = {
  children: 'Hello World',
};
