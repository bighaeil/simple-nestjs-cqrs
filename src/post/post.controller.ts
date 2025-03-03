import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(
    @Body()
    body: {
      id: string;
      userId: string;
      title: string;
      content: string;
    },
  ) {
    return this.postService.createPost(
      body.id,
      body.userId,
      body.title,
      body.content,
    );
  }

  @Get(':userId')
  async getPostsByUser(@Param('userId') userId: string) {
    return this.postService.getPostsByUser(userId);
  }
}
