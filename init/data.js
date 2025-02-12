const sampleData = [
    {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
      image1: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      image2: "https://media.istockphoto.com/id/173592376/photo/comtemporary-asian-decor.webp?a=1&s=612x612&w=0&k=20&c=96g1YjS4TjNixDuhy9V6ueVOO3K4rJluh0q3JgfGdL8=",
      price: 1500,
      discount: 5.7,
      location: "Malibu",
      country: "United States"
    },
    {
      title: "Luxury Villa in Santorini",
      description: "Stay in a luxurious villa with a private infinity pool and stunning sea views.",
      image: "https://media.istockphoto.com/id/1194125055/photo/modern-bedroom-with-working-desk-and-bedding.webp?a=1&s=612x612&w=0&k=20&c=t1-0QmQ8HgY89nhGZdEtg9C1LdcJ_tDVLM-N8jCcn-s=",
      image1: "https://media.istockphoto.com/id/1205911554/photo/modern-bed-room-interior-in-luxury-villa-white-colours-big-window.webp?a=1&s=612x612&w=0&k=20&c=hdjp3lmDpuG0VeK_qJcwRelLx2poZ1C-hwFZiBanTv0=",
      image2: "https://media.istockphoto.com/id/184326836/photo/luxury-hotel-room.webp?a=1&s=612x612&w=0&k=20&c=RULYitAvv6z4fEJKVh5uEYjUOVMkant3LlXXJ0xg5Bo=",
      price: 2200,
      discount: 10.0,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Mountain View Cabin",
      description: "A cozy cabin in the mountains, perfect for hiking and relaxation.",
      image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image1: "https://media.istockphoto.com/id/1285717713/photo/apartment-in-apartment-building.webp?a=1&s=612x612&w=0&k=20&c=3TeveLwa0kRatErXUnaUjimJf6_siMXx9JJfXzqKWBc=",
      image2: "https://media.istockphoto.com/id/1216698298/photo/brand-new-modern-furnished-canadian-style-apartment.webp?a=1&s=612x612&w=0&k=20&c=GkM3In_ECrLWgc-3mr2MiCY6p3LBWidY1ub3MRl_LDw=",
      price: 900,
      discount: 7.5,
      location: "Aspen",
      country: "United States"
    },
    {
      title: "Skyline Penthouse Suite",
      description: "An exclusive penthouse suite offering breathtaking city views.",
      image: "https://plus.unsplash.com/premium_photo-1677626706034-86c0e5387ac7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      image1: "https://media.istockphoto.com/id/1390954291/photo/modern-furnished-apartment-brand-new-from-developer.webp?a=1&s=612x612&w=0&k=20&c=5DD0acTvgmpKxD-e_WCNBBU4hB9ryOBvyUSX3h8GeyI=",
      image2: "https://media.istockphoto.com/id/1390954291/photo/modern-furnished-apartment-brand-new-from-developer.webp?a=1&s=612x612&w=0&k=20&c=5DD0acTvgmpKxD-e_WCNBBU4hB9ryOBvyUSX3h8GeyI=",
      price: 3500,
      discount: 12.0,
      location: "New York",
      country: "United States"
    },
    {
      title: "Tropical Resort Bungalow",
      description: "Stay in a private bungalow surrounded by lush greenery and tropical vibes.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
      image1: "https://media.istockphoto.com/id/1280971456/photo/canadian-apartment-in-new-apartment-building-in-griffintown-montreal-area.webp?a=1&s=612x612&w=0&k=20&c=VTSdvAW7KWf84jPZ5Z-czQsrzMHzYWVeXlB3p1JVVmQ=",
      image2: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1100,
      discount: 6.5,
      location: "Bali",
      country: "Indonesia"
    },
    {
      title: "Desert Oasis Retreat",
      description: "Experience tranquility in a desert resort with modern comforts.",
      image: "https://images.unsplash.com/photo-1545175707-9eec1209f720?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      image1: "https://media.istockphoto.com/id/2184598728/photo/interior-rooms-of-a-beautifully-decorated-home.webp?a=1&s=612x612&w=0&k=20&c=8xQXI_5sdaSSeTqppcJIW2uvVRYshuztmg8xP_PpaGQ=",
      image2: "https://media.istockphoto.com/id/2170944682/photo/luxury-modern-master-bedroom.webp?a=1&s=612x612&w=0&k=20&c=37SeMu2XEVFNcziX6DhQYW9t6Cf4Ldp2UeeCPsq_9z4=",
      price: 1300,
      discount: 8.0,
      location: "Dubai",
      country: "United Arab Emirates"
    },
    {
      title: "Lakeside Cabin Retreat",
      description: "Relax in a quiet cabin by the lake, perfect for fishing and campfires.",
      image: "https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      image1: "https://media.istockphoto.com/id/1215525968/photo/canadian-house-in-greater-montreal-area-with-backyard-and-street-view.webp?a=1&s=612x612&w=0&k=20&c=8aNcA3Uzxw93ivPrJD8crAOSopAre3oWu6mznZ5IlT8=",
      image2: "https://media.istockphoto.com/id/1295731728/photo/gorgeous-wood-flooring-in-master-bathroom.webp?a=1&s=612x612&w=0&k=20&c=da4IqcxeBmOiom29H9S2VdofeEFtBc8XVDhwODPAV8I=",
      price: 750,
      discount: 4.0,
      location: "Lake Tahoe",
      country: "United States"
    },
    {
      title: "Historical Castle Stay",
      description: "Stay in a centuries-old castle and experience medieval luxury.",
      image: "https://images.unsplash.com/photo-1528105817752-5c47696eef04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      image1: "https://plus.unsplash.com/premium_photo-1675745329401-ed4b9b73be6a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image2: "https://plus.unsplash.com/premium_photo-1675745329042-f9a1330b2ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
      price: 2800,
      discount: 9.2,
      location: "Edinburgh",
      country: "Scotland"
    },
    {
      title: "Jungle Treehouse Escape",
      description: "Sleep among the treetops in this unique jungle treehouse.",
      image: "https://images.unsplash.com/photo-1599722585837-c1cb8eea32ff?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image1: "https://plus.unsplash.com/premium_photo-1675745330147-41c50df90244?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image2: "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 600,
      discount: 5.5,
      location: "mumbai",
      country: "india"
    },
    {
      title: "Ice Hotel Igloo Experience",
      description: "Experience the magic of an igloo stay in a real ice hotel.",
      image: "https://media.istockphoto.com/id/1499534598/photo/modern-glass-building-facade.webp?a=1&s=612x612&w=0&k=20&c=inYUFxWoe0gwuUpj_aXoeSw0Bq91f2aEyg3B5E1ik5I=",
      image1: "https://plus.unsplash.com/premium_photo-1673014201217-14442b17ab56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image2: "https://plus.unsplash.com/premium_photo-1673014201324-2eccc35d8387?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
      price: 1800,
      discount: 6.0,
      location: "Lapland",
      country: "Finland"
    },
    {
        title: "Oceanfront Paradise Retreat",
        description: "Enjoy the serenity of ocean waves in this luxurious beachfront retreat with stunning views.",
        image: "https://images.unsplash.com/photo-1663959117006-614151f98a09?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image1: "https://plus.unsplash.com/premium_photo-1676968002512-3eac82b1d847?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2: "https://plus.unsplash.com/premium_photo-1676968002945-c8f74e0e27d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
        price: 1800,
        discount: 6.5,
        location: "Miami",
        country: "United States"
      },
      {
        title: "Luxury Santorini Escape",
        description: "Stay in an elegant villa overlooking the Aegean Sea with world-class amenities.",
        image: "https://media.istockphoto.com/id/1184326482/photo/tokyo-skyscraper-buildings-on-a-clear-day.webp?a=1&s=612x612&w=0&k=20&c=DxpaNTb7DfPg9anI_pEpXUwgRbFrrutRa1NMtc-H-WQ=",
        image1: "https://plus.unsplash.com/premium_photo-1676823570926-238f23020786?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2: "https://plus.unsplash.com/premium_photo-1676823552697-51effb9f6c96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
        price: 2300,
        discount: 10.0,
        location: "Santorini",
        country: "Greece"
      },
      {
        title: "Alpine Mountain Chalet",
        description: "A cozy wooden chalet nestled in the mountains, perfect for skiing and relaxation.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=60",
        image1: "https://plus.unsplash.com/premium_photo-1674567529893-42e6c18a320a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2: "https://plus.unsplash.com/premium_photo-1674567530085-4d6333ebe6e9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
        price: 950,
        discount: 7.8,
        location: "Aspen",
        country: "United States"
      },
      {
        title: "Skyline Penthouse View",
        description: "Experience breathtaking city views in this ultra-modern penthouse suite.",
        image: "https://media.istockphoto.com/id/1171068943/photo/government-office.jpg?s=612x612&w=0&k=20&c=wVB5VZ3VDscVlnv8v28-iIcnMWhD9byzbil2i-GB2yQ=",
        image1: "https://plus.unsplash.com/premium_photo-1676823570985-e9bcd570e3ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        image2: "https://plus.unsplash.com/premium_photo-1676823552723-f24b5a5d44d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        price: 3500,
        discount: 12.5,
        location: "New York",
        country: "United States"
      },
      {
        title: "Bali Tropical Getaway",
        description: "A secluded villa surrounded by lush tropical greenery and nature.",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
        image1: "https://plus.unsplash.com/premium_photo-1675744019091-2cda983aae31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2: "https://plus.unsplash.com/premium_photo-1675744019321-f90d6d719da7?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
        price: 1150,
        discount: 6.9,
        location: "Bali",
        country: "Indonesia"
      },
      {
        title: "Dubai Desert Oasis",
        description: "A luxurious retreat in the desert, offering the perfect blend of modern and traditional styles.",
        image: "https://plus.unsplash.com/premium_photo-1672097247893-4f8660247b1f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        image1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
        image2: "https://media.istockphoto.com/id/1087328330/photo/english-style-bedroom-with-a-large-soft-fabric-bed-bedside-tables-with-lamps-large-wardrobe.webp?a=1&s=612x612&w=0&k=20&c=X5csXUb8taYmHjhO1KyxEBqslQZ_aMiuGX0xjX8FLxg=",
        price: 1350,
        discount: 8.2,
        location: "Dubai",
        country: "United Arab Emirates"
      },
      {
        title: "Lakefront Log Cabin",
        description: "A charming log cabin by the lake, perfect for a cozy and peaceful stay.",
        image: "https://images.unsplash.com/photo-1528266542126-d64713949918?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
        image1: "https://media.istockphoto.com/id/155444077/photo/beautiful-romantic-bedroom.webp?a=1&s=612x612&w=0&k=20&c=LoN0PEMQF_CFZ8unD5ntNuBwE8Gl2Sh3s44181X7664=",
        image2: "https://images.unsplash.com/photo-1588796460666-590f1d712a2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        price: 800,
        discount: 4.5,
        location: "Lake Tahoe",
        country: "United States"
      },
      {
        title: "Medieval Castle Stay",
        description: "A unique opportunity to stay in a historic castle with royal decor.",
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D://images.unsplash.com/photo-1595782457876-9a8f4f8f2c3e?auto=format&fit=crop&w=800&q=60",
        image1: "https://plus.unsplash.com/premium_photo-1733266976058-8727378218e7?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1554136567-ffa8c5a269fb?auto=format&fit=crop&w=800&q=60",
        image2: "https://plus.unsplash.com/premium_photo-1733353309577-ebe815f18392?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1611152050454-176bf09b9db2?auto=format&fit=crop&w=800&q=60",
        price: 2900,
        discount: 9.0,
        location: "Edinburgh",
        country: "Scotland"
      },
      {
        title: "Treetop Jungle Resort",
        description: "Experience the beauty of nature with a stay in a luxury treehouse in the jungle.",
        image: "https://plus.unsplash.com/premium_photo-1661964298224-7747aa0ac10c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D://images.unsplash.com/photo-1555480321-5d4d98c9524f?auto=format&fit=crop&w=800&q=60",
        image1: "https://plus.unsplash.com/premium_photo-1733353323840-cefa39cced34?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1541955501-b4851de106b1?auto=format&fit=crop&w=800&q=60",
        image2: "https://plus.unsplash.com/premium_photo-1683134520102-a7b65579c4bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D://images.unsplash.com/photo-1564507004663-5fe6a97e07a7?auto=format&fit=crop&w=800&q=60",
        price: 700,
        discount: 5.0,
        location: "Costa Rica",
        country: "Costa Rica"
      },
      {
        title: "Arctic Ice Hotel",
        description: "Stay in an actual ice hotel for a unique winter experience.",
        image: "https://images.unsplash.com/photo-1568229988520-4bc288da81f7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D://images.unsplash.com/photo-1547471249-ec1d54c79927?auto=format&fit=crop&w=800&q=60",
        image1: "https://plus.unsplash.com/premium_photo-1683140513388-4344c8fc2778?q=80&w=1114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
        image2: "https://plus.unsplash.com/premium_photo-1683140535272-97b1a18baab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D://images.unsplash.com/photo-1602525426636-12c5a0b9a432?auto=format&fit=crop&w=800&q=60",
        price: 2000,
        discount: 6.7,
        location: "Lapland",
        country: "Finland"
      }
  ];
  
module.exports ={data : sampleData};