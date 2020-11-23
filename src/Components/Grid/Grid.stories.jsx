import Grid from './Grid';
import GridItem from './GridItem/GridItem';

export default {
  title: 'Grid/Grid',
  component: Grid,
  argTypes: {
    children: {
      description: 'Text, HTML or JSX that will be inside the Grid Item.',
      control: {
        disable: true,
      },
    },
  },
};

const Template = (args) => (
  <Grid>
    <GridItem smPhone={{ colSpan: 1 }} tabletHz={{ colSpan: 6 }}>
      1
    </GridItem>
    <GridItem smPhone={{ colSpan: 1 }} tabletHz={{ colSpan: 1 }}>
      2
    </GridItem>
    <GridItem smPhone={{ colSpan: 1 }} tabletHz={{ colSpan: 1 }}>
      3
    </GridItem>
    <GridItem smPhone={{ colSpan: 1 }} tabletHz={{ colSpan: 1 }}>
      4
    </GridItem>
    <GridItem hideMobile>5</GridItem>
    <GridItem hideMobile>6</GridItem>
    <GridItem hideMobile>7</GridItem>
    <GridItem hideMobile>8</GridItem>
    <GridItem hideMobile>9</GridItem>
    <GridItem hideMobile>10</GridItem>
    <GridItem hideMobile>11</GridItem>
    <GridItem hideMobile>12</GridItem>
  </Grid>
);

export const grid = Template.bind({});
grid.args = {
  children: 'Hello World',
};
