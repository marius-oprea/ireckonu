import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DbService } from '../../../db/db.service';
import { MessagesHandlingService } from '../../../core/messages-handling.service';
import { DetailsService } from '../details.service';
import { Post } from '../../../data-models/post';
import { IreckonuEvent } from '../../../data-models/ireckonu-event';
import * as moment from 'moment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  id: string;
  event: IreckonuEvent;
  posts: Post[];
  showMoreText: string;
  dbSubscription: any;
  postsSubscription: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DbService,
    private location: Location,
    public errorHandlingService: MessagesHandlingService,
    private eventDetailsService: DetailsService
    ) {
      this.posts = [];
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.dbSubscription = this.dbService.getItem(this.id).subscribe(result => {
      this.event = result as IreckonuEvent;
    }, error => {
      console.error(error);
      this.errorHandlingService.showMessage('Error getting user data!', 'danger');
    });

    this.initShowMore();
    this.initPosts();
  }

  initShowMore() {
    this.showMoreText = `In 1.5 hours, will we explore Amsterdam on our bicycles, we'll show beautiful canals, hidden gems, and absolutely
                         wonderful scenarios along the way. This will be a trip you will definitely won't forget to soon.`;
  }

  initPosts() {
    this.postsSubscription = this.eventDetailsService.getPosts().subscribe(result => {
      this.posts = result as Post[];
    }, error => {
      console.error(error);
      this.errorHandlingService.showMessage('Error getting post messages!', 'danger');
    });
  }

  getWhen(date: string) {
    // first format, corrects and validate the string date
    return moment(date, 'DD/MM/YYYY').format('dddd, MMMM DD [from] hh:mm A');
  }

  onBack() {
    this.location.back();
  }

  ngOnDestroy() {
    if (this.dbSubscription) {
      this.dbSubscription.unsubscribe();
    }
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }
}
