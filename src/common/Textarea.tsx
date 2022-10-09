import React from 'react';
import classnames from 'classnames';

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

class Textarea extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const { className } = this.props;
    return (
      <textarea
        {...this.props}
        className={classnames(
          'p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
          className
        )}
      />
    );
  }
}

export default Textarea;
