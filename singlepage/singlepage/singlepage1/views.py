from django.shortcuts import render
from django.http import HttpResponse, Http404

texts = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique dolores rerum quidem explicabo repudiandae ea nisi, nesciunt saepe dolor? Maxime aut esse architecto nisi obcaecati rerum repudiandae nulla labore!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis neque consequuntur quae distinctio est expedita ab, nihil, iure similique dolor laudantium voluptatum fugit repudiandae praesentium sed ipsum minus debitis? Consectetur.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita eaque tenetur corrupti sint dolor, sapiente cum et sunt cupiditate laboriosam eum vel soluta quasi voluptatem impedit odit eveniet? Sit.'
        ]

def index(request):
    return render(request, 'singlepage/index.html')

def section(request, num):
    try:
        return HttpResponse(texts[num-1])
    except IndexError as er:
        raise Http404('No such section')