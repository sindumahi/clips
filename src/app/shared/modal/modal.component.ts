import { Component, Input, OnInit, ElementRef,OnDestroy } from '@angular/core';
import { ModalService} from 'src/app/services/modal.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,OnDestroy {
  // to prevent double toggle tabs to open by passing id from parent to child
@Input() modalID = ''
  constructor(public modal: ModalService, public el: ElementRef) { 
  }

  // to prevent css issue
  ngOnInit(): void {
  document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement)
  }
  CloseModal(){
    this.modal.ToggleModal(this.modalID)
  }
}
