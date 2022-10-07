import React from 'react';
import Textarea from '../../common/Textarea';

interface State {
  graphRaw: string;
  graph: string[];
}

type Props = Record<string, unknown>;

class Home extends React.PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      graphRaw: '',
      graph: [],
    }
  }

  private handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    // const { value, name } = e.target;
    // this.setState({
    //   [name]: value,
    // })
  }

  render(): React.ReactNode {
    return (
      <div>
        <Textarea
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Home;

