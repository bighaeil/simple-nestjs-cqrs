import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PostRepository } from './repositories/post.repository';
import { CreatePostHandler } from './handlers/create-post.handler';
import { GetPostsByUserHandler } from './handlers/get-posts-by-user.handler';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [CqrsModule],
  providers: [
    PostRepository,
    CreatePostHandler,
    GetPostsByUserHandler,
    PostService,
  ],
  controllers: [PostController],
})
export class PostModule {}
