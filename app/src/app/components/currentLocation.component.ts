/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dailogComponent } from './dailog.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-currentLocation',
  templateUrl: './currentLocation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class currentLocationComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_CJdswSCOperyKxGW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_CJdswSCOperyKxGW(bh) {
    try {
      bh = this.sd_TVf2X4ZftBgv7wkG(bh);
      //appendnew_next_sd_CJdswSCOperyKxGW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CJdswSCOperyKxGW');
    }
  }

  currentLocation(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_zV8k9DES3HkxPHhk(bh);
      //appendnew_next_currentLocation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hKKf0wQcXefoAmi4');
    }
  }

  //appendnew_flow_currentLocationComponent_start

  sd_TVf2X4ZftBgv7wkG(bh) {
    try {
      this.page.res = undefined;
      this.page.lat = undefined;
      this.page.lng = undefined;
      this.page.markers = [];
      bh = this.sd_CPQkMqrVYfRnIaUP(bh);
      //appendnew_next_sd_TVf2X4ZftBgv7wkG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TVf2X4ZftBgv7wkG');
    }
  }

  sd_CPQkMqrVYfRnIaUP(bh) {
    try {
      const dailogDialog = this.__page_injector__.get(MatDialog);
      const dailogDialogRef = dailogDialog.open(dailogComponent, {});
      dailogDialogRef.afterClosed().subscribe((event) => {
        this.page.res = event;
        this.sd_9oob0Jp1zLxSWE0v(bh);

        //appendnew_next_sd_CPQkMqrVYfRnIaUP;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CPQkMqrVYfRnIaUP');
    }
  }

  async sd_9oob0Jp1zLxSWE0v(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nempty'](
          this.page.res,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8ZS7jbnWO32N88qR(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_8mRoNjVQClQxPaN8(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9oob0Jp1zLxSWE0v');
    }
  }

  sd_8ZS7jbnWO32N88qR(bh) {
    try {
      const page = this.page;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          if (position) {
            page.lat = position.coords.latitude;
            page.lng = position.coords.longitude;
            console.log('Neutrinos Studio1', page.lat);
            console.log('Neutrinos Studio2', page.lng);
          }
        });
      } else {
        console.log('Location is Not found');
      }
      bh = this.sd_H9H5yJhvCkZ1mNX0(bh);
      //appendnew_next_sd_8ZS7jbnWO32N88qR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ZS7jbnWO32N88qR');
    }
  }

  sd_H9H5yJhvCkZ1mNX0(bh) {
    try {
      //appendnew_next_sd_H9H5yJhvCkZ1mNX0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H9H5yJhvCkZ1mNX0');
    }
  }

  sd_8mRoNjVQClQxPaN8(bh) {
    try {
      const page = this.page;
      console.log('No data');
      return false;
      //appendnew_next_sd_8mRoNjVQClQxPaN8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8mRoNjVQClQxPaN8');
    }
  }

  sd_zV8k9DES3HkxPHhk(bh) {
    try {
      const page = this.page;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          if (position) {
            page.lat = position.coords.latitude;
            page.lng = position.coords.longitude;
            console.log('Neutrinos Studio1', page.lat);
            console.log('Neutrinos Studio2', page.lng);
          }
        });
      } else {
        console.log('Location is Not found');
      }
      //appendnew_next_sd_zV8k9DES3HkxPHhk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zV8k9DES3HkxPHhk');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_currentLocationComponent_Catch
}
