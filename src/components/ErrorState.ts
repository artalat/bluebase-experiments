import { getComponent } from '@bluebase/core';


export interface ErrorStateProps {
	/** The error to display */
	error?: Error,

	/** Callack function, called when retry button is pressed. */
	retry?: () => void,

  /**
   * Used to locate this view in end-to-end tests.
   */
	testID?: string,
}

/**
 * # 🚨 ErrorState
 *
 * Display an error message. Used by UIs when an exception is caught, and an error message
 * needs to be displayed. If in development mode, the actual error is displayed, otherwise
 * displays a generic message in production mode.
 *
 * ## Usage
 * ```jsx
 * <ErrorState retry={retryCallback} error={Error('Bang!')} />
 * ```
 */
export const ErrorState = getComponent<ErrorStateProps>('ErrorState');
