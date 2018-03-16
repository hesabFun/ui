import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

@Injectable()
export class MessageService {
  /**
   * Constructor of the class
   *
   * @param {MatSnackBar}  snackBar
   */
  public constructor(private snackBar: MatSnackBar) {
  }

  /**
   * Method to show simple snack-bar / toast on page.
   *
   * @param {string}  message
   * @param {boolean} showCloseButton
   * @param {number}  duration
   *
   * @returns {MatSnackBarRef<SimpleSnackBar>}
   */
  public simple(message: string, showCloseButton = false, duration = 6000): MatSnackBarRef<SimpleSnackBar> {
    const ref = this.snackBar.open(message, showCloseButton ? 'close' : null, {duration: duration});

    ref.onAction().subscribe(() => {
    });

    return ref;
  }
}
