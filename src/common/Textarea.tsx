import React from 'react';


type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

class Textarea extends React.PureComponent<Props> {
  render(): React.ReactNode {
    return (
      <textarea
        {...this.props}
      />
    );
  }
}

export default Textarea;
