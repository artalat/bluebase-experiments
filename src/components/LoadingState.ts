import { getComponent } from '@bluebase/core';

export interface LoadingStateProps {

	/** Flag if loading has timedOut. */
	timedOut?: boolean,

	/** Callback function when Retry button is pressed. */
	retry?: () => void,

  /**
   * Used to locate this view in end-to-end tests.
   */
	testID?: string,
}

/**
 * # ⏳ LoadingState
 *
 * A component that is used to show a loading state. Shows a spinner by
 * default. If 'timedOut' flag is set then it shows a timeout version.
 *
 * ## Usage
 * ```jsx
 * <LoadingState timedOut={false} retry={retryFunction}/>
 * ```
 *
 * TODO: Add a prop to allow custom text for retry button.
 */
export const LoadingState = getComponent<LoadingStateProps>('LoadingState');
