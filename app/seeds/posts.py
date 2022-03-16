from app.models import db, Post


def seed_posts():
    p1 = Post(
        user_id=1, img_url='https://media3.giphy.com/media/hQKiGV6MG8WmsHg2yx/giphy.webp?cid=ecf05e470ze15s2fdrphzhs7x0thci92vnblr2gozuzw15ev&rid=giphy.webp&ct=g', title='Poor grandma doesn\'t deserve this.', description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris. Nulla facilisi nullam vehicula ipsum a arcu cursus. Et malesuada fames ac turpis. Eget magna fermentum iaculis eu non diam phasellus vestibulum. In aliquam sem fringilla ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Nunc faucibus a pellentesque sit amet porttitor eget. Et netus et malesuada fames. Massa ultricies mi quis hendrerit. Mi quis hendrerit dolor magna. Dignissim diam quis enim lobortis scelerisque fermentum. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Senectus et netus et malesuada fames. Semper quis lectus nulla at. Senectus et netus et malesuada. Quis commodo odio aenean sed. Penatibus et magnis dis parturient. In iaculis nunc sed augue lacus viverra vitae.')

    p2 = Post(
        user_id=2, title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris. Nulla facilisi nullam vehicula ipsum a arcu cursus. Et malesuada fames ac turpis. Eget magna fermentum iaculis eu non diam phasellus vestibulum. In aliquam sem fringilla ut. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Nunc faucibus a pellentesque sit amet porttitor eget.', description="I bought my house almost 3 years ago. Immediately ran into issues with the neighbor, and following him breaking into my basement, I learned his identity and that he was a convicted sexual predator who just got out of jail following raping a child. More issues ensued. Over the past year or so, things quieted down. I actually started to feel safe in my house. Then the police searched his house. They found cell phones full of pictures of me in my bathroom, which faces my back yard. \n I can not even look out into my back yard anymore. All I can think is all the times he stood right outside that window and I never knew. I can not even shower in my own home now. I panic at every noise. I am not sleeping, I am barely eating. He could have just walked in at any time. And now all I think about is all these police officers who have viewed naked photos of me, how they are probably online for thousands to see. And I have not even seen them. \n2 years ago when things were bad with him, one of my coworkers offered to come help me with installing security cameras. While he was at my house, he sexually assaulted me. He never would have been here if it were not for the neighbor. It never would have happened. Because I reported that, I lost out on my dream career because they deemed it would be 'too stressful.' \nNow my anxiety is causing issues at my current job, and tomorrow they have set up a meeting to discuss putting me on unpaid leave.\nThis man has ruined my life, and I can not fix it.")

    p3 = Post(
        user_id=3, img_url='https://media3.giphy.com/media/nfLpqTrNPpqcE/200.webp?cid=ecf05e470ze15s2fdrphzhs7x0thci92vnblr2gozuzw15ev&rid=200.webp&ct=g', title='Take them both out!')

    p4 = Post(
        user_id=4, img_url='https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', title='Whatever happened to bungee jumping? This seems like a good place to take a leap from.', description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget nunc. Erat imperdiet sed euismod nisi porta lorem mollis. Quis commodo odio aenean sed adipiscing diam. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Aliquet risus feugiat in ante metus dictum at tempor commodo. Ut tellus elementum sagittis vitae et leo duis. Semper quis lectus nulla at volutpat diam ut. Nec nam aliquam sem et tortor consequat id. Purus sit amet volutpat consequat mauris. Orci eu lobortis elementum nibh tellus molestie nunc non. Risus commodo viverra maecenas accumsan. Amet porttitor eget dolor morbi. Elementum nibh tellus molestie nunc non blandit.\nInterdum velit euismod in pellentesque massa placerat duis ultricies. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Amet aliquam id diam maecenas ultricies mi eget mauris. Aliquam sem et tortor consequat id porta nibh. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Id leo in vitae turpis massa. Porta lorem mollis aliquam ut. Sem viverra aliquet eget sit amet. Auctor augue mauris augue neque gravida. Dui vivamus arcu felis bibendum ut tristique et. Ac tincidunt vitae semper quis lectus nulla at volutpat. Vitae proin sagittis nisl rhoncus mattis rhoncus. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Amet aliquam id diam maecenas ultricies mi. Imperdiet dui accumsan sit amet nulla facilisi. Ullamcorper sit amet risus nullam eget felis. Tristique magna sit amet purus gravida quis. Odio aenean sed adipiscing diam donec.")
    p5 = Post(
        user_id=5, img_url='https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Elmo-Flames-Meme.jpg', title='Hellmo hates seeding files. Hellmo feels like he\'s in Hell!!!!!', description='Hellmo hates seeding so F!@#$$$%^&*πø¨¥¨¥®ƒ√√∫µ∆˚¬˚∫˚∆∫˚®∑§¶•ªºª•º much!!! AAARRRRGGGGGHHHHHHHHH!')
    p6 = Post(
        user_id=5, img_url='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', title='I want to be here, if it is warm.', description='Listen to the waves.')
    p7 = Post(
        user_id=5, img_url='https://images.unsplash.com/photo-1639667910197-888506ab6827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5MHx4alBSNGhsa0JHQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', title='This is a delicious looking a sandwich. I wish I had it in my hands, too bad it\'s being used for a photo shoot', description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet. Lectus mauris ultrices eros in cursus turpis massa. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Enim lobortis scelerisque fermentum dui faucibus in. Maecenas sed enim ut sem viverra. Volutpat maecenas volutpat blandit aliquam etiam erat. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Egestas sed sed risus pretium quam vulputate dignissim. Donec enim diam vulputate ut pharetra sit. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Viverra nibh cras pulvinar mattis. Aliquam purus sit amet luctus venenatis. Eget mauris pharetra et ultrices neque ornare aenean. Eu consequat ac felis donec et odio pellentesque. In arcu cursus euismod quis viverra. Senectus et netus et malesuada fames ac turpis egestas.')

    db.session.add_all([p1, p2, p3, p4, p5, p6, p7])
    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
